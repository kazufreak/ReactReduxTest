import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet } from 'react-native';
import {store} from '../store';
import {setName, deleteName} from '../actions/action';
import ButtonCard from './Card';
import { H1 } from 'native-base';



export class Home extends Component{

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.title}>
              <H1>AED Helper</H1>
            </View>
            <View style={styles.buttonContiner}>
              <ButtonCard style={styles.button} icon='heart' name='呼吸確認' press={()=>this.props.navigation.navigate('呼吸確認')}/>
              <ButtonCard style={styles.button} icon='map' name='AED Map'/>
            </View>
            <Text style={{marginTop: 100}}>My name is {this.props.name}.</Text>
            {/*<View style={{flexDirection: 'row'}}>
              <Button
                onPress={this.props.deleteName}
                title="deleteName"
              /> 
              <Button
                onPress={() => this.props.setName('カバヤ')}
                title="setName"
              />
        </View>*/}
            {/* ストアは、以下の様なJSONで記述されています。combine reducerのキーにuserを使ったのでuserプロパティの中に、stateが保存されます。 */}
            {/* stor のstateを取り出すにはgetStateメソッドを使います。JSON.stringifyで文字列へと変換しています。 */}
            <Text style={{marginBottom: 100}}>現在のstore: {JSON.stringify(store.getState())}</Text>
          </View>
        )
      }
    }
const mapStateToProps = state => ({
    // storeは巨大なJsonの塊なので、nameにjsonから取って来たデータを代入している。 
    name: state.user.name
})

const mapDispatchToProps = {
    // importしたactionCreatorを記述。
    setName,
    deleteName
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex:1,
  },
  title:{
    marginTop: 50,
    flex:0.3,
  },
  buttonContiner:{
    flexDirection: 'column',
    flex:0.5,

  },
  button:{
    marginBottom:0,
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Home)
