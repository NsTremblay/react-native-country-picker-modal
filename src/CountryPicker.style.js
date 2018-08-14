import { StyleSheet, PixelRatio, Platform } from 'react-native'
import { getHeightPercent } from './ratio'

export default StyleSheet.create({
  container: {},
  modalContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:20,
    marginTop:20
  },
  input: {
    height: 48,
    fontSize: 18,
    marginLeft:15,
    fontFamily:'Avenir Next',
    flex:1
  },
  inputOnly: {
    marginLeft: '15%'
  },
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 19
  },
  imgStyle: {
    resizeMode: 'cover',
    width: 32,
    height: 32,
    borderWidth: 0,
    opacity: 1,
    borderRadius: Platform.OS=='ios'? 16:64
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 30,
    height: 30,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  itemCountry: {
    flexDirection: 'row',
    height: getHeightPercent(7),
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32
  },
  itemCountryName: {
    justifyContent: 'center',
    width: '70%',
    borderBottomWidth: 2 / PixelRatio.get(),
    borderBottomColor: '#ccc',
  },
  countryName: {
    fontSize: getHeightPercent(2.2)
  },
  scrollView: {
    flex: 1
  },
  letters: {
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    height: 25,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  letterText: {
    textAlign: 'center',
    fontSize: getHeightPercent(2.2)
  },
  closeButton: {
    height: 48,
    width:48,
  },
  closeButtonImage: {
    height: 48,
    width: 48,
  },
  filterableRow:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:20,
    height:70
  },
  searchTitle:{
    fontSize:30,
    fontFamily:'Avenir Next',
    marginTop:20,
    marginHorizontal:20,
    fontWeight:'600'
  }
})
