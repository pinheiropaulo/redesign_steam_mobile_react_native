import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

export const Header = styled.View`
  margin-top: 33px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 34px;
  line-height: 38px;
  font-family: 'Roboto_Bold';
  margin-bottom: 15px;
`;

export const Text = styled.Text`
  font-size: 17px;
  line-height: 22px;
  font-family: 'Roboto_Regular';
  margin-bottom: 35px;
`;

export const GuardBanner = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #ccc;
`;

export const GuardText = styled.Text`
  font-size: 16px;
  line-height: 21px;
  font-family: 'Roboto_Regular';
  margin-bottom: 30px;
`;

export const TextInfo = styled.Text`
  font-size: 15px;
  line-height: 20px;
  font-family: 'Roboto_Regular';
  color: #21232899;
`;

export const TextLink = styled.Text`
  font-size: 15px;
  line-height: 20px;
  margin-left: 5px;
  margin-top: 10px;
  color: #3a82f7;
  font-family: 'Roboto_Regular';
`;
