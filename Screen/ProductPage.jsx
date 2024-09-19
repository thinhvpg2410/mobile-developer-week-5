import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from "react-native";

const ProductPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: './assets/product/vs_silver.png'}}
                style={styles.productImage}
            />

            <Text style={styles.productTitle}>
                Điện Thoại Vsmart Joy 3 - Hàng chính hãng
            </Text>

            <View style={styles.priceContainer}>
                <Text style={{
                    fontSize: 24,
                    color: '#FFD700'
                }}>★★★★★</Text>
                <Text style={{
                    marginLeft: 5,
                    color: '#888888',
                }}>(Xem 828 đánh giá)</Text>
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.currentPrice}>1.790.000 đ</Text>
                <Text style={styles.originalPrice}>1.790.000 đ</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#ff0000',
                }}>Ở đâu rẻ hơn hoàn tiền </Text>

            </View>

            <TouchableOpacity style={styles.colorSelectionButton}>
                <Text style={{
                    textAlign: 'center',
                    color: '#333',
                }}>4 MÀU - CHỌN MÀU</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    productImage: {
        width: '100%',
        height: 400,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,

    },
    currentPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff0000',
    },
    originalPrice: {
        fontSize: 14,
        textDecorationLine: 'line-through',
        color: '#888888',
        marginLeft: 10,
    },
    colorSelectionButton: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buyButton: {
        backgroundColor: '#ff0000',
        padding: 15,
        borderRadius: 5,
        marginTop: 15,
        verticalAlign: 'bottom',
        justifyContent: 'flex-end',

    },
    buyButtonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ProductPage;
