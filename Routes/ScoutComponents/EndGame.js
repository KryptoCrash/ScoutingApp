import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import SegmentedControl from './Buttons/SegmentedControl.js';
import NumButton from './Buttons/NumButton.js';
import RadioButton from './Buttons/RadioButton.js'
import CustomTextBox from './Utility/CustomTextBox'
import Timer from './Utility/Timer.js';

export default class Endgame extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {{textAlign: "center", fontSize: 35, fontWeight: 'bold'}}>Endgame</Text>
                <View style = {styles.endgameContainer}>
                    <NumButton id="BallsScored" width={120}>Balls Scored</NumButton>

                    <View style={{margin: 20}}>
                        <SegmentedControl
                            id="Team"
                            data={["Park", "Climb", "None"]}
                        />
                    </View>

                    <Timer id="Timer">Start Stopwatch</Timer>

                    <View style={{paddingTop: 20, paddingBottom: 10}}>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>Initial Climb Height</Text>
                    </View>
                    <View style={styles.climbContainer}>
                        <View style={styles.climbHeight}>
                            <Image
                                source={require('../../Assets/End Low.png')}
                                style={{width: 300, height: 150, borderRadius: 10}}
                            />
                          <Image
                                source={require('../../Assets/End Level.png')}
                                style={{width: 300, height: 150, borderRadius: 10}}
                            />
                            <Image
                                source={require('../../Assets/End High.png')}
                                style={{width: 300, height: 150, borderRadius: 10}}
                            />
                            <RadioButton id="parkPosition" data={["Low", "Balanced", "High"]} bgc={"orange"}/>
                        </View>
                        <View style = {{flex: 1, flexDirection: 'row'}}>
                            <View style = {styles.climbPosition}>
                                <Text style = {{fontWeight: "bold", fontSize: 20}}>Climb Position</Text>
                                <Image
                                    source = {require('../../Assets/Climb Position.png')}
                                    style = {{width: 300, height: 150}}
                                />
                                <RadioButton id="climbPosition" data={["Edge", "Middle Bar", "Center"]} bgc={"orange"}/>
                            </View>
                            <View style = {styles.climbComments}>
                                <Text style = {{fontWeight: "bold", fontSize: 20}}>Comments</Text>
                                <Text style = {{fontSize: 12}}>
                                Add any comments that you feel are useful. Do they attempt to climb but fall?
                                Do they get in the way of other robots? Do they swing a lot on the climb? Are they able to balance the rung?
                                Are they able to adjust their climb position? Do they slide on the run? Anything else that shows evidence of
                                good/poor performance?
                                </Text>
                                <CustomTextBox
                                    id="AutonomousComments"
                                    default=""
                                    width={600}
                                    height={400}
                                    backgroundColor={"#DDD"}
                                    borderRadius={10}
                                    options={{
                                        multiline: true,
                                        numberOfLines: 10
                                }}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: '#FFF'
    },
    endgameContainer: {
        alignItems: 'center',
        borderColor: "black",
        padding: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10
    },
    climbContainer: {
        flex: 1,
        flexDirection: "column"
    },
    climbHeight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    climbPosition: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    climbComments: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    }
});
