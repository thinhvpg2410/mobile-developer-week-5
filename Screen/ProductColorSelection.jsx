import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import {productData} from "../productData";



const ProductColorSelection = ({navigation}) => {
    // const colors = ["#C5F1FB", "#F30D0D", "#000000", "#234896"]
    const [selectedColor, setSelectedColor] = useState(productData.color[0]);
    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };
    return (
        <View style={styles.container}>
            <View style={styles.productContainer}>
                <Image
                    source={{uri: selectedColor["image-url"]}}
                    style={styles.productImage}/>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    marginTop: 5
                }}>
                    <Text style={styles.productTitle}>{productData.name}</Text>
                    <Text>Màu: {selectedColor.name}</Text>
                    <Text>Cung cấp bởi Tiki Trading</Text>
                    <Text style={styles.productTitle}>{productData.price.toLocaleString()} đ</Text>


                </View>
            </View>
            <View style={{padding: 20}}>
                <Text style={styles.chooseText}>Chọn một màu bên dưới:</Text>
                <View style={styles.colorsContainer}>
                    {productData.color.map((color, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.colorOption,
                                {backgroundColor: color.id},
                                selectedColor === color && styles.selectedColor,
                            ]}
                            onPress={() => handleColorSelect(color)}
                        />
                    ))}
                </View>

                <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.confirmButtonText}>XONG</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D3D3D3',
    },
    productContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 10
    },
    productImage: {
        width: 100,
        height: 150,
        marginRight: 10,
        resizeMode: 'contain',
    },
    productTitle: {
        justifyContent: 'flex-start',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    chooseText: {
        fontSize: 20,
        marginBottom: 10,
    },
    colorsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
        alignItems: 'center',
    },
    colorOption: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 5,
    },
    selectedColor: {
        borderWidth: 3,
        borderColor: '#007BFF',
    },
    confirmButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    confirmButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});


export default ProductColorSelection;