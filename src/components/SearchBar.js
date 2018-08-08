import React from 'react';
import {
    Button,
    Dimensions,
    LayoutAnimation,
    UIManager,
    StyleSheet,
    View,
    TextInput,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import { getCurrentTheme } from '../style';

const theme = getCurrentTheme();

const SCREEN_WIDTH = Dimensions.get('window').width;

class SearchBar extends React.PureComponent {
    static defaultProps = {
        onClear: () => null,
        onCancel: () => null,
        onFocus: () => null,
        onBlur: () => null,
        onChangeText: () => null
    };

    constructor(props) {
        super(props);

        this.state = { hasFocus: false, isEmpty: true };
        this.inputRef = React.createRef();
    }

    focus = () => {
        const { current } = this.inputRef;
        current.focus();
    };

    blur = () => {
        const { current } = this.inputRef;
        current.blur();
    };

    clear = () => {
        const { props, handleChangeText } = this;
        const { onClear } = props;
        handleChangeText('');
        onClear();
    };

    cancel = () => {
        this.blur();
        this.handleBlur();
        const { onCancel } = this.props;
        onCancel();
    };

    handleFocus = () => {
        const { onFocus } = this.props;
        onFocus();
        UIManager.configureNextLayoutAnimation &&
            LayoutAnimation.easeInEaseOut();
        this.setState({ hasFocus: true });
    };

    handleBlur = () => {
        this.props.onBlur();
        UIManager.configureNextLayoutAnimation &&
            LayoutAnimation.easeInEaseOut();
        this.setState({ hasFocus: false });
    };

    handleChangeText = (text) => {
        this.props.onChangeText(text);
        this.setState({ isEmpty: text === '' });
    };

    render() {
        const { props, state } = this;
        const { hasFocus } = state;
        const SearchIcon = (
            <Image
                size={20}
                source={theme.icons.searchIcon}
                style={{ marginLeft: 8 }}
            />
        );

        return (
            <View style={styles.container}>
                <View
                    style={[
                        styles.inputContainer,
                        !hasFocus ? { marginRight: 15 } : null
                    ]}
                >
                    {SearchIcon}
                    <TextInput
                        ref={this.inputRef}
                        autoFocus={false}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        onChangeText={this.handleChangeText}
                        value={props.value}
                        placeholder="search"
                        style={styles.input}
                        clearButtonMode="always"
                    />
                </View>
                {state.hasFocus && (
                    <Button title="Cancel" onPress={this.cancel} />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        backgroundColor: '#f5f5f5',
        paddingBottom: 13,
        paddingTop: 13 + 20,
        flexDirection: 'row'
    },
    input: {
        marginLeft: 6,
        flex: 1
    },
    inputContainer: {
        borderBottomWidth: 0,
        backgroundColor: '#dcdce1',
        borderRadius: 9,
        height: 36,
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    rightIconContainerStyle: {
        marginRight: 8
    },
    leftIconContainerStyle: {
        marginLeft: 8
    }
});

SearchBar.propTypes = {
    onClear: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default SearchBar;
