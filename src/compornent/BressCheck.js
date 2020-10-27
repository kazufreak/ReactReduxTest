import React,{Component} from 'react';
import { Text, Button, Icon, Container, Content, View } from 'native-base';
import BressCheckGuid from './bresschexkguid';
export default class ButtonCard extends Component {
  render() {
    return (
      <Container>
        <Content>
            <BressCheckGuid />
        </Content>
      </Container>
    
    );
  }
}