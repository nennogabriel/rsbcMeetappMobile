import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, MeetupList } from './styles';
import Meetup from '~/components/Meetup';
import api from '~/services/api';

export default function Dashboard() {
  // const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = api.get('meetups');
      setMeetups(response.data);
    }
    loadMeetups();
  }, []);

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
            Realizar inscrição
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
