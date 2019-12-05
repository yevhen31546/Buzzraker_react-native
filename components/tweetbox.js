import React from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { Icon, Button } from "native-base";
import EmojiInput from "react-native-emoji-input";
import DocumentPicker from "react-native-document-picker";
import Camera from "./camera";


export default function Tweetbox(props) {
  const [showemoji, setShowemoji] = React.useState(false);
  const [camera, showcamera] = React.useState(false);
  const [image, setImage] = React.useState(false);
  const [text, setText] = React.useState("");
  const [file, setFile] = React.useState(false);
  const pickFiles = async () => {
    let result = await DocumentPicker.pick();
    setFile(file);
    console.log(result);
  };
  if (camera) {
    return (
      <Camera
        saveImage={image => {
          showcamera(false);
          setImage(image);
        }}
        close={() => showcamera(false)}
      />
    );
  }
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <TextInput
        onChangeText={text => setText(text)}
        style={{ height: 120, borderColor: "#ccc", borderWidth: 1 }}
        placeholder="Create a buzz"
        multiline
        value={text}
      />
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#ccc",
          justifyContent: "space-between"
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={pickFiles}>
            <Icon style={{ padding: 10, color: "violet" }} name="ios-attach" />
          </TouchableOpacity>
          {/*    <TouchableOpacity onPress={() => setShowemoji(!showemoji)}>
            <Icon style={{ padding: 10, color: "violet" }} name="md-sad" />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => showcamera(true)}>
            <Icon style={{ padding: 10, color: "violet" }} name="ios-camera" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 100,
            paddingRight: 10,
            paddingTop: 2,
            paddingBottom: 2,
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              console.log(file);
              console.log(image);
              console.log(text);
            }}
            style={{ backgroundColor: "violet", flex: 1, borderRadius: 10 }}
          >
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ textAlign: "center" }}>Buzz</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/*    {showemoji && (
        <View style={{ width: "100%", height: 600 }}>
          <EmojiInput
            emojiFontSize={20}
            onEmojiSelected={emoji => {
              console.log(emoji);
              setText(text + emoji);
            }}
          />
        </View>
      )} */}
    </View>
  );
}
