import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/signin"); // สลับไปหน้าเข้าสู่ระบบอัตโนมัติ
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* กล่องสี่เหลี่ยมสีขาวโค้งมนตรงกลาง */}
      <View style={styles.logoBox}>
        <Text style={styles.logoText}>hopeline</Text>
        <Text style={styles.logoSub}>YOUR WRITING SOLUTIONS</Text>
      </View>

      {/* ตัวหมุนโหลดข้อมูลสีขาว */}
      <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A005C", // สีม่วงเข้มตามดีไซน์ต้นฉบับ
    alignItems: "center",
    justifyContent: "center",
  },
  logoBox: {
    backgroundColor: "#FFFFFF",
    width: 180,
    height: 180,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#3A005C",
    fontStyle: "italic",
  },
  logoSub: {
    fontSize: 9,
    fontWeight: "600",
    color: "#3A005C",
    marginTop: 4,
  },
  loader: {
    marginTop: 40,
  },
});
