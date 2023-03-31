import { Colors } from "./Assets/Colors";
import { View, Text, StatusBar, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Images } from "./Assets/Images";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import { useDispatch, useSelector } from "react-redux";
import { addData, ClearData } from "./Redux/dataAction";



export default function Search() {

    const [searchText, setsearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [sort, setSort] = useState('');
    const [rdata, setRdata] = useState(false);
    const isFocused = useIsFocused()
    const dispatch = useDispatch();

    const reduxData = useSelector(state => {
        return state.dataReducer.data;
    })


    const list = [{ id: '1', name: 'Dog' },
    { id: '2', name: 'Cow' },
    { id: '3', name: 'Cat' },
    { id: '4', name: 'Horse' },
    { id: '5', name: 'Donkey' },
    { id: '6', name: 'Tiger' },
    { id: '7', name: 'Lion' },
    { id: '8', name: 'Panther' },
    { id: '9', name: 'Leopard' },
    { id: '10', name: 'Cheetah' },
    { id: '11', name: 'Bear' },
    { id: '12', name: 'Elephant' },
    { id: '13', name: 'Polar bear' },
    { id: '14', name: 'Turtle' },
    { id: '15', name: 'Tortoise' },
    { id: '16', name: 'Crocodile' },
    { id: '17', name: 'Rabbit' },
    { id: '18', name: 'Porcupine' },
    { id: '19', name: 'Hare' },
    { id: '20', name: 'Hen' },
    { id: '21', name: 'Pigeon' },
    { id: '22', name: 'Albatross' },
    { id: '23', name: 'Crow' },
    { id: '24', name: 'Fish' },
    { id: '25', name: 'Dolphin' },
    { id: '26', name: 'Frog' },
    { id: '27', name: 'Whale' },
    { id: '28', name: 'Alligator' },
    { id: '29', name: 'Eagle' },
    { id: '30', name: 'Flying squirrel' },
    { id: '31', name: 'Ostrich' },
    { id: '32', name: 'Fox' },
    { id: '33', name: 'Goat' },
    { id: '34', name: 'Jackal' },
    { id: '35', name: 'Emu' },
    { id: '36', name: 'Armadillo' },
    { id: '37', name: 'Eel' },
    { id: '38', name: 'Goose' },
    { id: '39', name: 'Arctic fox' },
    { id: '40', name: 'Wolf' },
    { id: '41', name: 'Beagle' },
    { id: '42', name: 'Gorilla' },
    { id: '43', name: 'Chimpanzee' },
    { id: '44', name: 'Monkey' },
    { id: '45', name: 'Beaver' },
    { id: '46', name: 'Orangutan' },
    { id: '47', name: 'Antelope' },
    { id: '48', name: 'Bat' },
    { id: '49', name: 'Badger' },
    { id: '50', name: 'Giraffe' },
    { id: '51', name: 'Hermit Crab' },
    { id: '52', name: 'Giant Panda' },
    { id: '53', name: 'Hamster' },
    { id: '54', name: 'Cobra' },
    { id: '55', name: 'Hammerhead shark' },
    { id: '56', name: 'Camel' },
    { id: '57', name: 'Hawk' },
    { id: '58', name: 'Deer' },
    { id: '59', name: 'Chameleon' },
    { id: '60', name: 'Hippopotamus' },
    { id: '61', name: 'Jaguar' },
    { id: '62', name: 'Chihuahua' },
    { id: '63', name: 'King Cobra' },
    { id: '64', name: 'Ibex' },
    { id: '65', name: 'Lizard' },
    { id: '66', name: 'Koala' },
    { id: '67', name: 'Kangaroo' },
    { id: '68', name: 'Iguana' },
    { id: '69', name: 'Llama' },
    { id: '70', name: 'Chinchillas' },
    { id: '71', name: 'Dodo' },
    { id: '72', name: 'Jellyfish' },
    { id: '73', name: 'Rhinoceros' },
    { id: '74', name: 'Hedgehog' },
    { id: '75', name: 'Zebra' },
    { id: '76', name: 'Possum' },
    { id: '77', name: 'Wombat' },
    { id: '78', name: 'Bison' },
    { id: '79', name: 'Bull' },
    { id: '80', name: 'Buffalo' },
    { id: '81', name: 'Sheep' },
    { id: '82', name: 'Meerkat' },
    { id: '83', name: 'Mouse' },
    { id: '84', name: 'Otter' },
    { id: '85', name: 'Sloth' },
    { id: '86', name: 'Owl' },
    { id: '87', name: 'Vulture' },
    { id: '88', name: 'Flamingo' },
    { id: '89', name: 'Racoon' },
    { id: '90', name: 'Mole' },
    { id: '91', name: 'Duck' },
    { id: '92', name: 'Swan' },
    { id: '93', name: 'Lynx' },
    { id: '94', name: 'Monitor lizard' },
    { id: '95', name: 'Elk' },
    { id: '96', name: 'Boar' },
    { id: '97', name: 'Lemur' },
    { id: '98', name: 'Mule' },
    { id: '99', name: 'Baboon' },
    { id: '100', name: 'Mammoth' },
    { id: '101', name: 'Blue whale' },
    { id: '102', name: 'Rat' },
    { id: '103', name: 'Snake' },
    { id: '104', name: 'Peacock' }];

    useEffect(() => {

        if (isFocused) {
            dispatch(ClearData(null));
            setSort('');
            setSearchResult([]);
            setsearchText('');
            console.log('.......................', reduxData)
        }

    }, [isFocused])

    useEffect(() => {
        if (searchText.length == 0 || searchText == '') {
            setSearchResult([]);
            setSort('');
        } else {
            let sText = searchText.toLowerCase();
            let result = list.filter(check);

            function check(item) {
                if (item.name.toLowerCase().includes(sText)) {
                    return item;
                }
            }

            setSearchResult([...result]);
            setRdata(false)


        }
    }, [searchText])

    useEffect(() => {
        if (searchResult.length <= 0 && searchText != '') {
            setRdata(true);
        }
    }, [searchResult])

    useEffect(() => {
        if (sort != '') {
            if (sort == 'Asc') {
                console.log('ascending');
                let sorted = searchResult.sort((a, b) => {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;

                    return 0;
                });
                setSearchResult([...sorted]);
            }
            else if (sort == 'Des') {
                console.log('descending');
                let sorted = searchResult.sort((a, b) => {
                    if (a.name < b.name)
                        return 1;
                    if (a.name > b.name)
                        return -1;

                    return 0;
                });
                setSearchResult([...sorted]);
            }
        }
    }, [sort])



    const renderSearchResult = (item) => {
        return (
            <>
                <Text style={{ fontSize: 16, color: Colors.textColor, padding: 10 }}>{item.item.name}</Text>
                <View style={{ height: 2, backgroundColor: Colors.bgBlack }}></View>
            </>
        )
    }
    return (
        <>
            <StatusBar
                translucent
                barStyle='dark-content'
                backgroundColor={Colors.bgColor}
            />
            <SafeAreaView style={{ backgroundColor: Colors.bgColor, flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 10, justifyContent: 'space-evenly' }}>
                    <View style={SearchStyles.searchBar}>
                        <TextInput numberOfLines={1} style={{ width: '60%', fontSize: 14, color: Colors.textColor }}
                            placeholder='Search'
                            onChangeText={(text) => { setsearchText(text) }}
                            placeholderTextColor={Colors.darkGrey}
                            onFocus={() => { }} returnKeyType={'search'} value={searchText}
                        />
                        <TouchableOpacity style={{ width: 32, height: 32, borderRadius: 50, backgroundColor: Colors.bgGrey1, alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => { setSearchResult([]); setsearchText('') }}
                        >
                            <FastImage source={Images.cross} style={{ width: 22, height: 22, transform: [{ rotateZ: '45deg' }] }} tintColor={Colors.bgBlack} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                        <TouchableOpacity onPress={() => { setSort('Asc') }} >
                            <View style={{ backgroundColor: sort == 'Asc' ? Colors.orange : Colors.bgGrey1, height: 40, width: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <FastImage source={Images.arrow} style={{ width: 25, height: 25, transform: [{ rotateZ: '90deg' }] }} tintColor={Colors.bgBlack} />
                            </View>
                        </TouchableOpacity>

                        <Text style={{ color: Colors.textColor, fontSize: 8 }}>Ascending</Text>

                    </View>

                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                        <TouchableOpacity onPress={() => { setSort('Des') }} >
                            <View style={{ backgroundColor: sort == 'Des' ? Colors.orange : Colors.bgGrey1, height: 40, width: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <FastImage source={Images.arrow} style={{ width: 25, height: 25, transform: [{ rotateZ: '-90deg' }] }} tintColor={Colors.bgBlack} />
                            </View>
                        </TouchableOpacity>

                        <Text style={{ color: Colors.textColor, fontSize: 8 }}>Descending</Text>

                    </View>

                </View>

                {searchResult &&
                    <>
                        <View style={{ marginTop: 10, marginBottom: 10, alignSelf: 'center', flex: 1, width: '90%' }}>
                            <FlatList style={{}}
                                data={searchResult}
                                renderItem={renderSearchResult}
                                horizontal={false}
                                keyExtractor={(item) => item.id}
                                showsHorizontalScrollIndicator={true}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </>
                }
                {rdata && <View style={{ position: 'absolute', alignSelf: 'center', top: '50%' }}>
                    <Text style={{ color: Colors.textColor, fontSize: 12 }}>No Data found</Text>
                </View>}

            </SafeAreaView>
        </>
    )
}

const SearchStyles = StyleSheet.create({
    searchBar: {
        height: 44,
        borderRadius: 50,
        backgroundColor: Colors.bgWhite,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },

});