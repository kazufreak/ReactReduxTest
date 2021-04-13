import React,{Component} from 'react';
import { Image } from 'react-native'
import { Text, Button, Icon, Container, Content, View } from 'native-base';
import { compose } from 'redux';

export default class ButtonCard extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button large iconLeft bordered danger onPress={this.props.press}>
              <Icon name= {this.props.icon} />
              <Text>{this.props.name}</Text>
          </Button>
        </Content>
      </Container>
    
    );
    }
  }