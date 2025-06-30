import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import { CustomCheckbox, Plus, Profile } from '../../assets/genricIcon';
import { SafeAreaView } from 'react-native-safe-area-context';

const familyMembers = [
  { name: 'Silvia', backgroundColor: '#F9FAFB' },
  { name: 'Oliver', backgroundColor: '#F0FAF4' },
  { name: 'Jordan', backgroundColor: '#FFFAEB' },
  { name: 'Alicia', backgroundColor: '#FEF3F2' },
  { name: 'Grandpa Michael', backgroundColor: '#EFF8FF' },
  { name: 'Grandpa John', backgroundColor: '#F5F8FF' },
  { name: 'Grandma Desrae', backgroundColor: '#F9F5FF' },
  { name: 'Grandma Samantha', backgroundColor: '#FFF4ED' },
];

const permissions = [
  { label: 'Notifications', icon: require('../../assets/bell.png') },
  { label: 'Photos & videos', icon: require('../../assets/record.png') },
  { label: 'Camera', icon: require('../../assets/camera.png') },
  { label: 'Phone', icon: require('../../assets/call.png') },
  { label: 'Contacts', icon: require('../../assets/profile.png') },
  { label: 'Microphone', icon: require('../../assets/mic.png') },
];

const HomeScreen = () => {
  const [visible, setVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('Family board');
  const [checked, setChecked] = useState(
    permissions.reduce((acc, item) => ({ ...acc, [item.label]: true }), {}),
  );

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.dashboardContainer}>
          <Text style={styles.dashboardTitle}>Dashboard</Text>
          <View style={styles.tabs}>
            {['My activity', 'My results', 'Family board'].map(tab => (
              <Pressable
                key={tab}
                style={{ width: '33%' }}
                onPress={() => setActiveTab(tab)}
              >
                <Text
                  style={[styles.tab, activeTab === tab && styles.activeTab]}
                >
                  {tab}
                </Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.grid}>
            {familyMembers.map((member, index) => (
              <View
                key={index}
                style={[
                  styles.card,
                  { backgroundColor: member.backgroundColor },
                ]}
              >
                <Profile />
                <Text style={styles.name}>{member.name}</Text>
              </View>
            ))}
            <View style={[styles.card, styles.addCard]}>
              <Plus />
            </View>
          </View>
        </View>
      </SafeAreaView>

      <Modal transparent visible={visible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Goallex uses these permissions</Text>
          <Text style={styles.subtitle}>
            Please confirm that you accept them
          </Text>

          <ScrollView style={styles.permissionList}>
            {permissions.map((item, index) => (
              <View key={index} style={styles.permissionItem}>
                <Image source={item.icon} />
                <View style={styles.permissionText}>
                  <Text style={styles.permissionLabel}>{item.label}</Text>
                  <Text style={styles.permissionDescription}>
                    Used to provide you with timely information
                  </Text>
                </View>
                <Pressable
                  onPress={() =>
                    setChecked(prev => ({
                      ...prev,
                      [item.label]: !prev[item.label],
                    }))
                  }
                >
                  <CustomCheckbox
                    check={checked[item.label] ? '#3538CD' : '#fff'}
                    border={checked[item.label] ? '#3538CD' : '#fff'}
                  />
                </Pressable>
              </View>
            ))}
            <Pressable
              style={styles.continueButton}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.continueText}>Continue</Text>
            </Pressable>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    height: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily:'Inter',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    fontFamily:'Inter',
    marginTop: 20,
    marginBottom: 30,
    color: '#101828',
  },
  permissionList: {
    marginBottom: 20,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  permissionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    gap: 15,
    marginBottom: 18,
  },
  icon: {
    fontSize: 22,
    marginTop: 3,
  },
  permissionText: {
    width: '60%',
    flex: 1,
  },
  permissionLabel: {
    fontWeight: '700',
    fontFamily:'Inter',
    fontSize: 14,
  },
  permissionDescription: {
    fontSize: 12,
    fontFamily:'Inter',
    fontWeight:'500',
    color: '#888',
  },
  continueButton: {
    backgroundColor: '#101828',
    marginTop: 40,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueText: {
    color: 'white',
    fontFamily:'Inter',
    fontWeight: '600',
    fontSize: 16,
  },
  dashboardContainer: {
    padding: 20,
  },
  dashboardTitle: {
    fontSize: 18,
    fontFamily:'Inter',
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },

  tabs: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 30,
  },
  tab: {
    color: '#667085',
    width: '100%',
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderColor: '#D0D5DD',
    fontFamily:'Inter',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
  activeTab: {
    color: '#3538CD',
    borderColor: '#3538CD',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '30%',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#D9D9FF',
    marginBottom: 8,
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily:'Inter',
    textAlign: 'center',
  },
  addCard: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    backgroundColor: '#fff',
  },
  plus: {
    fontSize: 30,
    color: '#667085',
  },
});

export default HomeScreen;
