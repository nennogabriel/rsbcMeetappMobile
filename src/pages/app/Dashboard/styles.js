import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const MeetupList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;
