import { Colors } from "./Assets/Colors";
import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, StatusBar, RefreshControl, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from '@react-navigation/native';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { addData, ClearData } from "./Redux/dataAction";
import RenderData from './ListRender'



export default function First() {

    const isFocused = useIsFocused()
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [categoryRefresh, setCategoryreferesh] = useState(false);
    const reduxData = useSelector(state => {
        return state.dataReducer.list;
    })

    useEffect(() => {

        if (isFocused) {
            // dispatch(addData());
            // setData([]);
            setPage(1);
            getList();
            console.log('dataaaa', reduxData);
        }

    }, [isFocused])


    const getList = async () => {
        setCategoryreferesh(true);
        try {
            const config = {
                method: 'get',
                url: 'https://dummyapi.io/data/v1/user?page=' + page + ' &limit=10',
                headers: {
                    'app-id': '642551c8f5341b68ebc3ce7a',
                },

            };
            const response = await axios(config);
            if (data.length > 0) {
                setData([...data, ...response.data.data]);
                dispatch(addData(([...data, ...response.data.data])));
                setPage(page + 1);
                setCategoryreferesh(false);

            }
            else {
                dispatch(addData(response.data.data));
                setData(response.data.data)
                setPage(page + 1)
                setCategoryreferesh(false);

            }
        } catch (error) {
            console.error(error);
        }
    }

    const renderList = ({ item, props }) => {
        return (
            <RenderData data={item} />
        )

    }
    const refreshData = () => {
        dispatch(ClearData(null));
        setData([]);
        console.log('ddddddddddddddddddddddddd', data);
        console.log('rrrrrrrrrrrrrr', reduxData);
        setPage(1)
        getList();
    }



    return (
        <>
            <StatusBar
                translucent
                barStyle='dark-content'
                backgroundColor={Colors.bgColor}
            />
            <SafeAreaView style={{ backgroundColor: Colors.bgColor, flex: 1, }}>
                <View style={{ backgroundColor: Colors.textColor, padding: 10, marginTop: 10 }}>
                    <Text style={{ color: Colors.bgWhite, fontSize: 20, fontWeight: '600' }}>
                        List of Public APIs
                    </Text>
                </View>

                {data && <View style={{ marginTop: 10, alignSelf: 'center', flex: 1, width: '90%' }}>
                    <FlatList style={{ flex: 3 }}
                        data={reduxData}
                        renderItem={renderList}
                        horizontal={false}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        onEndReached={() => {
                            getList();
                        }}
                        onEndReachedThreshold={0.5}
                        extraData={categoryRefresh}
                        initialNumToRender={10}
                        refreshControl={<RefreshControl
                            refreshing={categoryRefresh}
                            onRefresh={() => refreshData()} />}
                        windowSize={5}
                        maxToRenderPerBatch={5}
                        updateCellsBatchingPeriod={30}
                        removeClippedSubviews={false}
                    />
                </View>}

            </SafeAreaView>


        </>
    )
}