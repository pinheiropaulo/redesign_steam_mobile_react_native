import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #212328;
`;

export const PasswordReset = styled.TouchableOpacity``;

export const PasswordText = styled.Text`
  color: #eceff4;
  font-size: 13px;
  line-height: 18px;
  margin-left: 200px;
  font-family: 'Roboto_Regular';
`;

export const LoginTextContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  flex-direction: row;
  align-items: flex-end;
`;

export const LoginText = styled.Text`
  color: #eceff4;
  font-size: 15px;
  line-height: 20px;
  font-family: 'Roboto_Regular';
`;

export const LoginTextLink = styled.Text`
  font-size: 15px;
  line-height: 20px;
  margin-left: 5px;
  color: #3a82f7;
  font-family: 'Roboto_Regular';
`;
