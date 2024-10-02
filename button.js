export default function button_tictactoe(props){

    const {id_i, id_j, text} = props

    return (
        <View style={styles.container}>
          <TouchableOpacity style={{
            alignItems: 'center',
            alignContent:'center',
            justifyContent:'center',
            width:'30%', 
            height:'20%',
            backgroundColor:'red',
    
            }}>
              <text>
                {text}
              </text>
            <view style={{backgroundColor:'red', }}>
                
            </view>
          </TouchableOpacity>
        </View>
      );
}