import { PricingCard } from 'react-native-elements';


export class Card extends Component{
    render() {
        return (
        <PricingCard 
            color="#4f9deb" 
            title="呼吸確認"　
            info={["デバイスのセンサーを利用して","呼吸を確認します"]}
            button={{ title: 'GET STARTED', icon: 'perm-identity' }}/>
        )
    }
}