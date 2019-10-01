import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, MeetupList } from './styles';
import Meetup from '~/components/Meetup';

export default function Dashboard() {
  // const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([
    {
      past: false,
      id: 6,
      title: 'Dev Python',
      description: 'Um envento de python carái',
      location: 'Mirc pantanal sala 1',
      date: '2019-09-26T18:00:00.000Z',
      createdAt: '2019-09-21T00:47:12.605Z',
      updatedAt: '2019-09-21T00:47:12.605Z',
      file_id: 1,
      user_id: 2,
      User: {
        name: 'José',
        email: 'jose@seal.works',
      },
      File: {
        url:
          'http://localhost:3333/static/b0d093ecd1b37df7f600ed7d68fa181e.png',
        name: '2015-12-27-1.png',
        path: 'b0d093ecd1b37df7f600ed7d68fa181e.png',
      },
    },
  ]);
  function handleButton(id) {
    console.tron.log(id);
  }

  return (
    <Container>
      {/* <DateContainer>
        <PreviousButton>{'<'}</PreviousButton>
        <DateSelector>{date}</DateSelector>
        <NextButton>{'>'}</NextButton>
      </DateContainer> */}
      <MeetupList
        data={meetups}
        keyExtrator={item => String(item.id)}
        renderItem={({ item }) => (
          <Meetup onPress={() => handleButton(item.id)} data={item}>
            Inscrever-se
          </Meetup>
        )}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: option => (
    <Icon name="format-list-bulleted" size={20} color={option.tintColor} />
  ),
};
