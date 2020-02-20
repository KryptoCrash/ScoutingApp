import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as Sharing from 'expo-sharing';
import Link from './Utility/Link.js';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>2020 - Infinite Recharge</Text>

                <View style={styles.linkContainer}>
                    <Link color="red" onPress={() => alert(1)}>Reset</Link>
                    <Link color="blue" onPress={() => alert(1)}>Undo</Link>
                    <Link color="blue" onPress={() => alert(1)}>Reset</Link>
                    <Link color="blue" onPress={() => alert(1)}>Save</Link>
                    <Link color="blue" onPress={() => Sharing}>Save and Export</Link>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DDD'
    },
    headerText: {
        flex: 1,
        fontSize: 30,
        paddingTop: 10,
        textAlign: "center"
    },
    linkContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingBottom: 15,
        paddingTop: 10
    }
});