import React,{Component} from 'react';
import { Image,StyleSheet } from 'react-native'
import { Text, Button, Header,Footer,FooterTab,Card, CardItem,Body,Icon, Container, Content, View } from 'native-base';
//import { Header } from 'react-native/Libraries/NewAppScreen';

export default class BressCheckGuid extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content　padder >
          <Image style={styles.image}source={require("../static/high-angle.jpg")}></Image>

        
          <Card style={styles.card}>
            <CardItem header bordered>
              <Text>説 明</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  スマートフォンを図のように設置して下さい。
                  準備ができたら下のスタートボタンを押して呼吸確認を開始します
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button full large success>
              <Text>START</Text>
          </Button>
        </Content>
        <Footer>
           
        </Footer>
      </Container>
    
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginBottom:10,
  },
  image:{
    
    width:'90%',
    resizeMode:'contain',
  },
  text:{
    
  }
})