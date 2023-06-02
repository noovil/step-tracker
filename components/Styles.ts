import { StyleSheet} from "react-native";

export default StyleSheet.create({
    textBody: {
        flex: 1, 
        justifyContent: 'center' 
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10, 
        elevation: 3,
        backgroundColor: '#483867',
        width: "max-content",
        margin: "auto"
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      buttonClose: {
        marginTop:10,
        padding:12,
        borderRadius:20,
        border: "3px solid rgb(171,177,186,40)",
      },
      buttonOpen: {
        padding:12,
        borderRadius:20,
        border: "3px solid rgb(171,177,186,40)",
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
});