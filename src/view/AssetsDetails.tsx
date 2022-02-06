import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Image, SafeAreaView} from 'react-native';
import {Text, Card, Button, Icon} from 'react-native-elements';
import {List} from 'react-native-paper';
import BottomNav from './common-components/BottomNav';

export default class AssetsDetails extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={styles.container}>
              <Card containerStyle={{borderRadius: 5, width: '90%'}}>
                <Card.Title>AC WORKSTATION</Card.Title>
                <Card.Divider />
                <View style={{marginBottom: 10}}>
                  <Accordion />
                </View>
                <Card.Title>Assets Tracking</Card.Title>
                <View>
                  <Text>Lat/Long:</Text>
                  <Text>Condition:</Text>
                  <Text>Image Capture:</Text>
                </View>
              </Card>
            </View>
          </View>
          {/* <BottomNav /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
  },
});
const Accordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title=" Assets Details "
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item
          title=""
          left={props => <Text style={{marginLeft: 30}}>Model:</Text>}
          right={props => <Text style={{marginRight: 80}}>1</Text>}
        />
        <List.Item title="Second item" description="Item description" />
      </List.Accordion>
    </List.Section>
  );
};
