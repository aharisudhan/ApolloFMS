import React from 'react';
import {Tab, Text, TabView, Badge} from 'react-native-elements';

export default () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary">
        <Tab.Item
          title={`Pending(${12})`}
          titleStyle={{fontSize: 12}}
          // icon={{name: 'timer', type: 'ionicon', color: 'white'}}
        />
        <Tab.Item
          title="Closed"
          titleStyle={{fontSize: 12}}
          // icon={{name: 'heart', type: 'ionicon', color: 'white'}}
        />
        <Tab.Item
          title="Scan"
          titleStyle={{fontSize: 12}}
          // icon={{name: 'cart', type: 'ionicon', color: 'white'}}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};
