import { FontAwesome } from "@expo/vector-icons"; // ไลบรารีไอคอนที่มีอยู่แล้วใน Expo
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert("แจ้งเตือน", "กรุณากรอกอีเมลและรหัสผ่านให้ครบถ้วน");
      return;
    }
    Alert.alert("สำเร็จ", `เข้าสู่ระบบด้วยอีเมล: ${email}`);
  };

  return (
    <View style={styles.container}>
      {/* ส่วนโลโก้ขนาดเล็กด้านบน */}
      <View style={styles.logoContainer}>
        <FontAwesome name="pencil" size={40} color="#3A005C" />
        <Text style={styles.logoText}>hopeline</Text>
        <Text style={styles.logoSub}>YOUR WRITING SOLUTIONS</Text>
      </View>

      {/* หัวข้อหน้าจอ */}
      <Text style={styles.headerTitle}>Login to your Account</Text>

      {/* ฟอร์มกรอกข้อมูล */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#A9A9A9"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.forgetPasswordBtn}>
          <Text style={styles.forgetPasswordText}>Forget Password?</Text>
        </TouchableOpacity>
      </View>

      {/* ปุ่ม Sign In หลัก */}
      <TouchableOpacity style={styles.primaryBtn} onPress={handleSignIn}>
        <Text style={styles.primaryBtnText}>Sign In</Text>
      </TouchableOpacity>

      {/* ตัวคั่น Social Login */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Or sign in with</Text>
        <View style={styles.line} />
      </View>

      {/* ปุ่ม Social Icons แนวนอน (Google, Facebook, X) */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="google" size={24} color="#EA4335" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome name="facebook" size={24} color="#1877F2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <FontAwesome6 name="square-x-twitter" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* ลิงก์สลับไปหน้า สมัครสมาชิก */}
      <View style={styles.footerRow}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text style={styles.footerLinkText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logoText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3A005C",
    fontStyle: "italic",
    marginTop: 5,
  },
  logoSub: {
    fontSize: 8,
    fontWeight: "600",
    color: "#3A005C",
    letterSpacing: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 20,
  },
  formContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F2F2F7",
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#000000",
    marginBottom: 15,
  },
  forgetPasswordBtn: {
    alignSelf: "flex-end",
  },
  forgetPasswordText: {
    color: "#6A0DAD",
    fontSize: 14,
    fontWeight: "500",
  },
  primaryBtn: {
    backgroundColor: "#3A005C",
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  primaryBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E5EA",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#8E8E93",
    fontSize: 14,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 40,
  },
  socialBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5EA",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#8E8E93",
    fontSize: 14,
  },
  footerLinkText: {
    color: "#3A005C",
    fontSize: 14,
    fontWeight: "bold",
  },
});
