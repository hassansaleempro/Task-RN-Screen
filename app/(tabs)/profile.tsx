import {
  getHeightPixel,
  getWidthPixel,
  normalized,
} from "@/constants/AppConstants";
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
      textColor: "#75E0A7",
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
      textColor: "#75E0A7",
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
      textColor: "#75E0A7",
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
      textColor: "#75E0A7",
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
      textColor: "#FDA29B",
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
                <Text
                  style={[styles.amountText, { marginLeft: getWidthPixel(5) }]}
                >
                  2,123.09
                </Text>
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
                    <Text style={styles.profitAmount}>500.00</Text>
                    <Image
                      source={require("../../assets/images/SAR_green.png")}
                      style={styles.sarImageSmall}
                      resizeMode="contain"
                    />
                    <Text style={styles.profitAmountPercentage}>(%25)</Text>
                  </View>
                </View>
                <View style={styles.profitRow}>
                  <Text style={styles.profitLabel}>أرباح هذا الشهر</Text>
                  <View style={styles.profitValue}>
                    <Text style={styles.plusIcon}>+</Text>
                    <Text style={styles.profitAmount}>120.5</Text>
                    <Image
                      source={require("../../assets/images/SAR_green.png")}
                      style={styles.sarImageSmall}
                      resizeMode="contain"
                    />
                    <Text style={styles.profitAmountPercentage}>(%1.2)</Text>
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

            {/* Divider */}
            <View style={styles.divider} />

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
                      <Text
                        style={[
                          styles.statusText,
                          { color: investment.textColor },
                        ]}
                      >
                        {investment.status}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={styles.pendingButtonRight}>
                      <Text style={styles.pendingDate}>
                        من أصل ايداع {investment.originalDeposit}
                      </Text>
                      <Image
                        source={require("../../assets/images/SAR_gray.png")}
                        style={styles.sarImageVerySmall}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={styles.pendingButtonRight}>
                      <Text
                        style={[
                          styles.pendingButtonView,
                          {
                            color: investment.id === 5 ? "white" : "#47CD89",
                          },
                        ]}
                      >
                        أرباح {investment.profits}
                      </Text>
                      <Image
                        source={
                          investment.id === 5
                            ? require("../../assets/images/SAR_gray.png")
                            : require("../../assets/images/SAR_green.png")
                        }
                        style={styles.sarImageVerySmall}
                        resizeMode="contain"
                      />
                      <Ionicons
                        name="chevron-back"
                        size={16}
                        color={investment.id === 5 ? "white" : "#47CD89"}
                      />
                    </View>
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
    fontSize: normalized(16),
  },
  title: {
    fontSize: normalized(28),
    // fontFamily: Fonts.suisse.bold,
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
    marginVertical: getHeightPixel(20),
    direction: "rtl",
  },
  summaryTitle: {
    fontSize: normalized(18),
    // fontFamily: Fonts.suisse.regular,
    marginBottom: getHeightPixel(10),
    alignSelf: "center",
    color: "#F7F7F7",
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: getHeightPixel(3),
    alignSelf: "center",
  },
  currencySymbol: {
    color: "#D6C0A6",
    fontSize: normalized(24),
    marginRight: getWidthPixel(4),
    // fontFamily: Fonts.suisse.regular,
  },
  amountText: {
    color: "#D6C0A6",
    fontSize: normalized(32),
    // fontFamily: Fonts.suisse.regular,
  },
  opportunitiesText: {
    color: "white",
    fontSize: normalized(16),
    marginBottom: getHeightPixel(20),
    alignSelf: "center",
    marginTop: getHeightPixel(5),
    // fontFamily: Fonts.suisse.regular,
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
    borderRightWidth: getWidthPixel(0.5),
    borderColor: "#CECFD266",
  },
  profitLabel: {
    color: "white",
    fontSize: normalized(16),
    textAlign: "left",
    // fontFamily: Fonts.suisse.regular,
  },
  profitValue: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: getHeightPixel(5),
  },
  plusIcon: {
    color: "#4CAF50",
    fontSize: normalized(16),
  },
  profitAmount: {
    color: "#4CAF50",
    fontSize: normalized(16),
    // fontFamily: Fonts.suisse.regular,
    marginRight: getWidthPixel(4),
  },
  profitAmountPercentage: {
    color: "#CECFD2",
    fontSize: normalized(16),
    marginRight: getWidthPixel(4),
    // fontFamily: Fonts.suisse.regular,
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
    fontSize: normalized(16),
    textAlign: "center",
    // fontFamily: Fonts.suisse.regular,
  },
  divider: {
    height: getHeightPixel(1),
    backgroundColor: "#FFFFFF1A",
    marginBottom: getHeightPixel(30),
    marginHorizontal: getWidthPixel(10),
  },
  section: {
    marginBottom: getHeightPixel(30),
    direction: "rtl",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#22354488",
    borderWidth: getWidthPixel(1),
    borderColor: "#FFFFFF1A",
    borderRadius: getWidthPixel(10),
    padding: getWidthPixel(10),
  },
  sectionTitle: {
    fontSize: normalized(18),
    marginBottom: getHeightPixel(15),
    color: "white",
    textAlign: "left",
    // fontFamily: Fonts.suisse.regular,
  },
  pendingCard: {},
  pendingAmount: {
    color: "#D6C0A6",
    fontSize: normalized(28),
    // fontFamily: Fonts.suisse.regular,
  },
  pendingDate: {
    color: "#98B5C6",
    fontSize: normalized(16),
    // fontFamily: Fonts.suisse.regular,
  },
  pendingButton: {
    backgroundColor: "#062C41",
    borderRadius: getWidthPixel(20),
    paddingVertical: getWidthPixel(5),
    paddingHorizontal: getWidthPixel(10),
    // marginBottom: getHeightPixel(3),
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: getWidthPixel(1),
    borderColor: "#065986",
  },
  pendingButtonText: {
    color: "#7CD4FC",
    fontSize: normalized(16),
    // fontFamily: Fonts.suisse.regular,
  },
  pendingButtonRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  pendingButtonView: {
    color: "white",
    fontSize: normalized(16),
    // fontFamily: Fonts.suisse.regular,
  },
  arrowIcon: {
    color: "#4A90E2",
    fontSize: normalized(16),
    // fontFamily: Fonts.suisse.regular,
  },
  investmentCard: {
    backgroundColor: "#22354488",
    borderWidth: getWidthPixel(1),
    borderColor: "#FFFFFF1A",
    borderRadius: getWidthPixel(10),
    padding: getWidthPixel(10),
    marginBottom: getHeightPixel(12),
    direction: "rtl",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: getHeightPixel(3),
  },
  cardAmount: {
    color: "#B0B0B0",
    fontSize: normalized(18),
    // fontFamily: Fonts.suisse.regular,
  },
  statusBadge: {
    paddingHorizontal: getWidthPixel(12),
    paddingVertical: getHeightPixel(4),
    borderRadius: getWidthPixel(15),
    borderWidth: getWidthPixel(1),
  },
  statusText: {
    color: "white",
    fontSize: normalized(16),
    // fontFamily: Fonts.suisse.regular,
  },
  originalDeposit: {
    color: "white",
    fontSize: normalized(14),
    marginBottom: getHeightPixel(8),
    // fontFamily: Fonts.suisse.regular,
  },
  profits: {
    color: "#4CAF50",
    fontSize: normalized(14),
    marginBottom: getHeightPixel(12),
    // fontFamily: Fonts.suisse.regular,
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
    fontSize: normalized(16),
    marginBottom: getHeightPixel(4),
    // fontFamily: Fonts.suisse.regular,
  },
  investmentDate: {
    color: "white",
    fontSize: normalized(12),
    opacity: 0.7,
    // fontFamily: Fonts.suisse.regular,
  },
  sarImage: {
    width: getWidthPixel(19),
    height: getHeightPixel(22),
    marginRight: getWidthPixel(5),
  },
  sarImageSmall: {
    width: getWidthPixel(11),
    height: getHeightPixel(13),
    marginRight: getWidthPixel(4),
  },
  sarImageVerySmall: {
    width: getWidthPixel(10),
    height: getHeightPixel(12),
    marginRight: getWidthPixel(4),
  },
  sarImageLarge: {
    width: getWidthPixel(27),
    height: getHeightPixel(30),
  },
});
