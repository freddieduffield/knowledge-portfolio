# react-native Setup

`npm install -g react-native-cli`

on getting error : **React/RCTBridgeDelegate.h' file not found**

```cli
sudo gem install cocoapods
cd ios && pod install
```

## Setting up a project

    react-native init ProjectName
    cd ProjectName
    react-native run-ios

to specfic the iPhone simulator...

    react-native run-ios --simulator="iPhone 8"
