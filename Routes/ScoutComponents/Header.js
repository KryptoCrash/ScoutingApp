import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Alert,
    AsyncStorage,
    Share
} from "react-native";

import RadioButton from "../../Components/Buttons/RadioButton.js";
import Link from "../../Components/Utility/Link.js";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {this.interval = setInterval(() => {this.setState({ time: Date.now() })}, 100)}
    componentWillUnmount() {clearInterval(this.interval)}

    reset() {
        Alert.alert(
            "Reset",
            "Are you sure you want to reset the Scoutsheet?",
            [
                {text: 'Reset', onPress: () => this.props.onReset()},
                {text: 'Cancel', style: 'cancel'}
            ]
          );
    }

    save() {
        (async () => {
            await AsyncStorage.setItem(
                "matches", 
                JSON.stringify(
                    [...JSON.parse(await AsyncStorage.getItem("matches")), JSON.stringify(global.data)]
                )
            )
        })();
    }

    saveAndExport() {
        (async () => {
            await AsyncStorage.setItem(
                "matches", 
                JSON.stringify(
                    [...JSON.parse(await AsyncStorage.getItem("matches")), JSON.stringify(global.data)]
                )
            )

            try {
                const g = id => global.data[id] //.split(`"`).join("").split(",").join("");

                const header = ",,Other,,,Autonomous,,,,,,,,,Balls Picked Up,,Balls Scored,,,,,Control Panel,,,End Game,Balls Scored,If Climb...,,,\nTeam #,Match #,Fits under trench?,Defense,Penalties,Starting Balls,Starting Position,Cross Line,Balls Picked Up,Low Goal,Outer Goal,Inner Goal,Shots Missed,Comments,Loading Station,Floor,Low Goal,Outer Goal,Inner Goal,Shots Missed,Location of Shots,Rotation,Color,Comments,Endgame Type,Balls Scored,Initial Climb Height,Initial Climb Position,Climb Time,Comments\n"
                const entry = [
                    g`TeamNumber`,
                    g`MatchNumber`,
                    g`FitsUnderTrench`? "Yes" : "No",
                    g`PlaysDefense`? "Yes" : "No",
                    g`RedCard`+g`YellowCard`>1?"Red and Yellow":!(g`RedCard`+g`YellowCard`)?"None":g`RedCard`?"Red":"Yellow",
                    g`StartingPieces`,
                    g`LinePosition`,
                    g`CrossesInitiationLine`? "Yes" : "No",
                    g`BallsPickedUp`,
                    g`AutoLow`,
                    g`AutoOuter`,
                    g`AutoInner`,
                    g`AutoMissed`,
                    g`AutonomousComments`,
                    g`BallsPickedUpFromLoadingStation`,
                    g`BallsPickedUpFromFloor`,
                    g`TeleLow`,
                    g`TeleOuter`,
                    g`TeleInner`,
                    g`TeleMissed`,
                    g`ShootFrom`,
                    g`Rotation`? "Yes" : "No",
                    g`Color`? "Yes" : "No",
                    g`TeleopComments`,
                    g`EndgameType`,
                    g`BallsScored`,
                    g`EndgameType`=="Climb"? g`ClimbHeight` : "",
                    g`EndgameType`=="Climb"? g`ClimbPosition` : "",
                    g`EndgameType`=="Climb"? g`Time` : "",
                    g`EndgameComments`
                ];

                let output = header + entry;
                global.output = output;

                const result = await Share.share({
                    message: JSON.stringify(global.output)
                });
    
                if (result.action == Share.sharedAction) {
                    if (result.activityType) {
                        // do nothing
                    } else {
                        // do nothing
                    }
                } else if (result.action == Share.dismissedAction) {
                    // do nothing
                }
            } catch (error) {
                alert(error.message);
            }
        })();
    }

    render() {
        return (
            <View style={{backgroundColor: global.data["Team"]=="Red Alliance"? "#FFD0D0" : "#D0F4FF"}}>
                <Text style={styles.headerText}>2020 - Infinite Recharge</Text>

                <View style={styles.linkContainer}>
                        <Link color="red" onPress={() => this.reset()}>Reset</Link>

                        <RadioButton
                            id="Team"
                            data={["Blue Alliance", "Red Alliance"]}
                            bgc="orange"
                            segmentedButton
                            forceOption
                            default="Blue Alliance"
                            options={{
                                flexDirection: "row",
                            }}
                        />

                    <Link color="blue" onPress={() => this.save()}>Save</Link>

                    <Link color="blue" onPress={() => this.saveAndExport()}>Save and Export</Link>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DDD"
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
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        paddingBottom: 15,
        paddingTop: 10
    }
});
