import { getHeightPixel, getWidthPixel } from "@/constants/AppConstants";
import { Fonts } from "@/constants/fonts";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const investmentData = [
    {
      id: 1,
      amount: "250.00",
      originalDeposit: "1,000",
      profits: "23",
      progress: "25%",
      remainingTime: "11 شهر",
      date: "12 يناير 2025",
      status: "جاري",
      statusColor: "#053321",
      borderColor: "#085D3A",
    },
    {
      id: 2,
      amount: "250.00",
      originalDeposit: "1,000",
      profits: "21.23",
      progress: "20%",
      remainingTime: "11 شهر",
      date: "12 يناير 2025",
      status: "جاري",
      statusColor: "#053321",
      borderColor: "#085D3A",
    },
    {
      id: 3,
      amount: "250.00",
      originalDeposit: "1,000",
      profits: "56.32",
      progress: "60%",
      remainingTime: "5 أشهر",
      date: "3 يونيو 2024",
      status: "جاري",
      statusColor: "#053321",
      borderColor: "#085D3A",
    },
    {
      id: 4,
      amount: "1250.00",
      originalDeposit: "5,000",
      profits: "56.32",
      progress: "90%",
      remainingTime: "1 شهر",
      date: "30 يناير 2024",
      status: "جاري",
      statusColor: "#053321",
      borderColor: "#085D3A",
    },
    {
      id: 5,
      amount: "1250.00",
      originalDeposit: "5,000",
      profits: "56.32",
      progress: "90%",
      remainingTime: "1 شهر",
      date: "30 يناير 2024",
      status: "متعثر",
      statusColor: "#55160C",
      borderColor: "#912018",
    },
  ];

  return (
    <LinearGradient
      colors={["#27475D", "#0A1828"]}
      locations={[0, 0.75]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 0.4 }}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.safeArea}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>استثماراتي</Text>
        </View>

        <LinearGradient
          colors={["#27475D", "#0A1828"]}
          locations={[0, 0.75]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0.4 }}
          style={styles.container}
        >
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {/* Main Investment Summary */}
            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>مستثمر حالياً</Text>
              <View style={styles.amountContainer}>
                <Text style={styles.amountText}>2,123.09</Text>
                <Image
                  source={require("../../assets/images/SAR.png")}
                  style={styles.sarImageLarge}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.opportunitiesText}>في ٧ فرص استثمارية</Text>

              {/* Profit Metrics */}
              <View style={styles.profitContainer}>
                <View style={styles.profitRow}>
                  <Text style={styles.profitLabel}>اجمالي الأرباح</Text>
                  <View style={styles.profitValue}>
                    <Text style={styles.plusIcon}>+</Text>
                    <Text style={styles.profitAmount}>﷼ 500.00 (%25)</Text>
                  </View>
                </View>
                <View style={styles.profitRow}>
                  <Text style={styles.profitLabel}>أرباح هذا الشهر</Text>
                  <View style={styles.profitValue}>
                    <Text style={styles.plusIcon}>+</Text>
                    <Text style={styles.profitAmount}>﷼ 120.5 (%1.2)</Text>
                  </View>
                </View>
              </View>

              {/* Action Buttons */}
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.actionButton}>
                  <View
                    style={[styles.actionIcon, { backgroundColor: "#C4E429" }]}
                  >
                    <Image
                      source={require("../../assets/images/ic_upload.png")}
                      style={[styles.actionIconImage, { tintColor: "black" }]}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.actionLabel}>إيداع جديد</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <View
                    style={[styles.actionIcon, { backgroundColor: "#062C41" }]}
                  >
                    <Image
                      source={require("../../assets/images/ic_download.png")}
                      style={styles.actionIconImage}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.actionLabel}>تصدير PDF</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <View
                    style={[styles.actionIcon, { backgroundColor: "#062C41" }]}
                  >
                    <Image
                      source={require("../../assets/images/ic_chart.png")}
                      style={styles.actionIconImage}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.actionLabel}>تحليلات</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Pending Investment */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>في انتظار الاستثمار</Text>
              <View style={styles.sectionHeader}>
                <View>
                  <View
                    style={[
                      styles.amountContainer,
                      { alignSelf: "flex-start" },
                    ]}
                  >
                    <Text style={styles.pendingAmount}>250.00</Text>
                    {/* <Text style={styles.pendingAmount}>﷼</Text> */}
                    <Image
                      source={require("../../assets/images/SAR.png")}
                      style={styles.sarImage}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.pendingDate}>ايداع في 12 يناير 2025</Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.pendingButton}>
                    <Text style={styles.pendingButtonText}>
                      جار البحث عن فرصة
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.pendingButtonRight}>
                    <Text style={styles.pendingButtonView}>عرض</Text>
                    <Ionicons name="chevron-back" size={16} color="white" />
                  </View>
                </View>
              </View>
            </View>

            {/* Current Investments */}
            <View
              style={[styles.section, { marginBottom: getHeightPixel(100) }]}
            >
              <Text style={styles.sectionTitle}>استثماراتي</Text>

              {investmentData.map((investment) => (
                <View key={investment.id} style={styles.investmentCard}>
                  <View style={styles.cardHeader}>
                    <View
                      style={[
                        styles.amountContainer,
                        { alignSelf: "flex-start" },
                      ]}
                    >
                      <Text style={styles.pendingAmount}>
                        {investment.amount}
                      </Text>
                      <Image
                        source={require("../../assets/images/SAR.png")}
                        style={styles.sarImage}
                        resizeMode="contain"
                      />
                    </View>
                    <View
                      style={[
                        styles.statusBadge,
                        {
                          backgroundColor: investment.statusColor,
                          borderColor: investment.borderColor,
                        },
                      ]}
                    >
                      <Text style={styles.statusText}>{investment.status}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={styles.pendingDate}>
                      من أصل ايداع ﷼ {investment.originalDeposit}
                    </Text>
                    <View style={styles.pendingButtonRight}>
                      <Text
                        style={[styles.pendingButtonView, { color: "#47CD89" }]}
                      >
                        {" "}
                        أرباح ﷼ {investment.profits}
                      </Text>
                      <Ionicons name="chevron-back" size={16} color="#47CD89" />
                    </View>
                    {/* <Text style={styles.pendingDate}>
                      أرباح ﷼ {investment.profits}
                    </Text> */}
                  </View>
                  <View style={styles.progressBar}>
                    <View
                      style={[
                        styles.progressFill,
                        { width: investment.progress as any },
                      ]}
                    />
                  </View>
                  <View style={styles.cardHeader}>
                    <Text style={styles.pendingDate}>من {investment.date}</Text>
                    <Text style={styles.remainingTime}>
                      متبقي {investment.remainingTime}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    paddingVertical: getHeightPixel(30),
    paddingHorizontal: getWidthPixel(20),
    direction: "rtl",
  },
  timeText: {
    color: "white",
    fontSize: getWidthPixel(16),
    fontWeight: "600",
  },
  title: {
    fontSize: getWidthPixel(28),
    fontFamily: Fonts.suisse.bold,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: getWidthPixel(8),
  },
  signalIcon: {
    width: getWidthPixel(20),
    height: getHeightPixel(12),
    backgroundColor: "white",
    borderRadius: getWidthPixel(2),
  },
  wifiIcon: {
    width: getWidthPixel(16),
    height: getHeightPixel(12),
    backgroundColor: "white",
    borderRadius: getWidthPixel(2),
  },
  batteryIcon: {
    width: getWidthPixel(24),
    height: getHeightPixel(12),
    backgroundColor: "white",
    borderRadius: getWidthPixel(2),
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: getWidthPixel(20),
  },
  summaryCard: {
    padding: getWidthPixel(20),
    marginBottom: getHeightPixel(20),
    direction: "rtl",
  },
  summaryTitle: {
    fontSize: getWidthPixel(18),
    fontFamily: Fonts.suisse.regular,
    fontWeight: "600",
    marginBottom: getHeightPixel(10),
    alignSelf: "center",
    color: "#F7F7F7",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: getHeightPixel(8),
    alignSelf: "center",
    gap: getWidthPixel(4),
  },
  currencySymbol: {
    color: "#D6C0A6",
    fontSize: getWidthPixel(24),
    marginRight: getWidthPixel(4),
    fontFamily: Fonts.suisse.regular,
  },
  amountText: {
    color: "#D6C0A6",
    fontSize: getWidthPixel(32),
    fontFamily: Fonts.suisse.regular,
  },
  opportunitiesText: {
    color: "white",
    fontSize: getWidthPixel(14),
    marginBottom: getHeightPixel(20),
    alignSelf: "center",
    fontFamily: Fonts.suisse.regular,
  },
  profitContainer: {
    marginBottom: getHeightPixel(40),
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  profitRow: {
    flexDirection: "column",
    justifyContent: "flex-end",
    flex: 1,
    paddingRight: getWidthPixel(12),
    borderRightWidth: getWidthPixel(1),
    borderColor: "#CECFD2",
  },
  profitLabel: {
    color: "white",
    fontSize: getWidthPixel(14),
    textAlign: "left",
    fontFamily: Fonts.suisse.regular,
  },
  profitValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusIcon: {
    color: "#4CAF50",
    fontSize: getWidthPixel(16),
    marginRight: getWidthPixel(4),
  },
  profitAmount: {
    color: "#4CAF50",
    fontSize: getWidthPixel(14),
    fontWeight: "600",
    fontFamily: Fonts.suisse.regular,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButton: {
    alignItems: "center",
  },
  actionIcon: {
    width: getWidthPixel(56),
    height: getHeightPixel(56),
    borderRadius: getWidthPixel(28),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: getHeightPixel(8),
  },
  actionIconImage: {
    width: getWidthPixel(24),
    height: getHeightPixel(24),
    tintColor: "white",
  },
  actionLabel: {
    color: "white",
    fontSize: getWidthPixel(12),
    textAlign: "center",
    fontFamily: Fonts.suisse.regular,
  },
  section: {
    marginBottom: getHeightPixel(30),
    direction: "rtl",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#223544",
    borderWidth: getWidthPixel(1),
    borderColor: "#FFFFFF1A",
    borderRadius: getWidthPixel(10),
    padding: getWidthPixel(10),
  },
  sectionTitle: {
    fontSize: getWidthPixel(18),
    fontWeight: "600",
    marginBottom: getHeightPixel(15),
    color: "white",
    textAlign: "left",
    fontFamily: Fonts.suisse.regular,
  },
  pendingCard: {},
  pendingAmount: {
    color: "#D6C0A6",
    fontSize: getWidthPixel(28),
    fontWeight: "bold",
    fontFamily: Fonts.suisse.regular,
  },
  pendingDate: {
    color: "#98B5C6",
    fontSize: getWidthPixel(18),
    fontFamily: Fonts.suisse.regular,
  },
  pendingButton: {
    backgroundColor: "#062C41",
    borderRadius: getWidthPixel(12),
    padding: getWidthPixel(5),
    marginBottom: getHeightPixel(5),
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: getWidthPixel(1),
    borderColor: "#065986",
  },
  pendingButtonText: {
    color: "#7CD4FC",
    fontSize: getWidthPixel(16),
    fontFamily: Fonts.suisse.regular,
  },
  pendingButtonRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  pendingButtonView: {
    color: "white",
    fontSize: getWidthPixel(18),
    fontFamily: Fonts.suisse.regular,
  },
  arrowIcon: {
    color: "#4A90E2",
    fontSize: getWidthPixel(16),
    fontFamily: Fonts.suisse.regular,
  },
  investmentCard: {
    backgroundColor: "#223544",
    borderWidth: getWidthPixel(1),
    borderColor: "#FFFFFF1A",
    borderRadius: getWidthPixel(10),
    padding: getWidthPixel(16),
    marginBottom: getHeightPixel(12),
    direction: "rtl",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: getHeightPixel(8),
  },
  cardAmount: {
    color: "#B0B0B0",
    fontSize: getWidthPixel(18),
    fontWeight: "bold",
    fontFamily: Fonts.suisse.regular,
  },
  statusBadge: {
    paddingHorizontal: getWidthPixel(12),
    paddingVertical: getHeightPixel(4),
    borderRadius: getWidthPixel(12),
    borderWidth: getWidthPixel(1),
  },
  statusText: {
    color: "white",
    fontSize: getWidthPixel(16),
    fontWeight: "600",
    fontFamily: Fonts.suisse.regular,
  },
  originalDeposit: {
    color: "white",
    fontSize: getWidthPixel(14),
    marginBottom: getHeightPixel(8),
    fontFamily: Fonts.suisse.regular,
  },
  profits: {
    color: "#4CAF50",
    fontSize: getWidthPixel(14),
    fontWeight: "600",
    marginBottom: getHeightPixel(12),
    fontFamily: Fonts.suisse.regular,
  },
  progressBar: {
    height: getHeightPixel(8),
    backgroundColor: "#85888E33",
    borderRadius: getWidthPixel(8),
    marginVertical: getHeightPixel(10),
  },
  progressFill: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: getWidthPixel(8),
  },
  remainingTime: {
    color: "white",
    fontSize: getWidthPixel(18),
    marginBottom: getHeightPixel(4),
    fontFamily: Fonts.suisse.regular,
  },
  investmentDate: {
    color: "white",
    fontSize: getWidthPixel(12),
    opacity: 0.7,
    fontFamily: Fonts.suisse.regular,
  },
  sarImage: {
    width: getWidthPixel(19),
    height: getHeightPixel(22),
  },
  sarImageLarge: {
    width: getWidthPixel(27),
    height: getHeightPixel(30),
  },
});
