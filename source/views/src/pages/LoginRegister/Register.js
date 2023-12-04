import React from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native-web';
import { NavLink } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Register = ({ navigation }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/login');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          margin: 40,
          borderRadius: 5,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 5,
          shadowOpacity: 1.0,
        }}
        elevation={5}
      >
        <View
          style={{
            backgroundColor: '#210f7a',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        >
          <Image style={{ width: 50, height: 50, margin: 5 }} source={require('../../assets/logo.png')} />
          <Text
            style={{
              paddingLeft: 20,
              fontSize: '2em',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Central Authentication Service
          </Text>
        </View>
        <View
          style={{
            margin: 20,
            marginRight: '50%',
            backgroundColor: '#eee',
            borderRadius: 3,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: '#990033',
              margin: 10,
            }}
          >
            Register Your Account
          </Text>

          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#ddd',
              margin: 10,
              marginTop: 0,
            }}
          >
            <Text
              style={{
                color: '#777',
                display: 'flex',
                fontSize: 13,
                fontWeight: 'bold',
              }}
            >
              Student ID
            </Text>

            <TextInput
              style={{
                flex: 1,
                paddingVertical: 2,
                backgroundColor: '#ffffdd',
                borderColor: '#ccc',
              }}
              inputMode="numeric"
              maxLength="7"
            />

            <Text
              style={{
                color: '#777',
                display: 'flex',
                fontSize: 13,
                fontWeight: 'bold',
              }}
            >
              Recovery Email
            </Text>

            <TextInput
              style={{
                flex: 1,
                paddingVertical: 2,
                backgroundColor: '#ffffdd',
                borderColor: '#ccc',
              }}
              keyboardType="email-address"
              maxLength="7"
            />

            <Text
              style={{
                color: '#777',
                display: 'flex',
                fontSize: 13,
                fontWeight: 'bold',
              }}
            >
              Password
            </Text>

            <TextInput
              style={{
                flex: 1,
                paddingVertical: 2,
                backgroundColor: '#ffffdd',
                borderColor: '#ccc',
              }}
              secureTextEntry={true}
            />

            <Text
              style={{
                color: '#777',
                display: 'flex',
                fontSize: 13,
                fontWeight: 'bold',
              }}
            >
              Confirm Password
            </Text>

            <TextInput
              style={{
                flex: 1,
                paddingVertical: 2,
                backgroundColor: '#ffffdd',
                borderColor: '#ccc',
              }}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              handleRegister();
            }}
            style={{
              backgroundColor: '#210f7a',
              borderRadius: 3,
              padding: 10,
              margin: 10,
            }}
          >
            <Text style={{ textAlign: 'center', color: 'blue' }}>Register</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              margin: 10,
            }}
          >
            <Text>Already have an account? </Text>

            <NavLink to={'/login'} style={{ display: 'inline-flex' }}>
              <Text
                style={{
                  textAlign: 'left',
                  textDecorationLine: 'underline',
                  color: 'blue',
                }}
              >
                Login
              </Text>
            </NavLink>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
