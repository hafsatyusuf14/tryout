import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomBottonProps {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

const CustomBotton = ({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
}: CustomBottonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomBotton;
