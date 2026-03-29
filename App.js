import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';

export default function App() {
  const [showArchive, setShowArchive] = useState(false);

  // OVDE MENJAŠ PAROVE KOJI SE VIDE NA EKRANU
  const picks = [
    {
      id: 1,
      player: 'Nickeil Alexander-Walker',
      line: '17.5 Points Over',
      sport: '🏀',
    },
    {
      id: 2,
      player: 'Bennedict Mathurin',
      line: '19.5 Points Over',
      sport: '🏀',
    },
  ];

  // ARHIVA - TRENUTNO PRAZNA
  const archive = [];

  if (showArchive) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>SNIPERTIPS HISTORY</Text>
          <ScrollView
            contentContainerStyle={
              archive.length === 0 ? styles.emptyCenter : null
            }>
            {archive.length === 0 ? (
              <Text style={styles.emptyText}>
                Archive is empty. New era starts now!
              </Text>
            ) : (
              archive.map((item) => (
                <View key={item.id} style={styles.card}>
                  <Text style={styles.player}>{item.title}</Text>
                  <Text style={[styles.line, { color: '#4CAF50' }]}>
                    {item.result}
                  </Text>
                </View>
              ))
            )}
          </ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowArchive(false)}>
            <Text style={styles.buttonText}>BACK TO PICKS</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>🎯 SNIPERTIPS PICKS</Text>
        <ScrollView style={styles.list}>
          {picks.map((pick) => (
            <View key={pick.id} style={styles.card}>
              <Text style={styles.icon}>{pick.sport}</Text>
              <View>
                <Text style={styles.player}>{pick.player}</Text>
                <Text style={styles.line}>{pick.line}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowArchive(true)}>
          <Text style={styles.buttonText}>VIEW WINNING HISTORY</Text>
        </TouchableOpacity>
        <View style={styles.adPlaceholder}>
          <Text style={styles.adText}>REKLAMA (GOOGLE ADMOB)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  content: { flex: 1, padding: 20 },
  header: {
    color: '#D4AF37',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#D4AF37',
  },
  icon: { fontSize: 30, marginRight: 15 },
  player: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  line: { color: '#D4AF37', fontSize: 16, fontWeight: '500' },
  button: {
    backgroundColor: '#D4AF37',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: 'black', fontWeight: 'bold', fontSize: 16 },
  emptyCenter: { flexGrow: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: 'grey', fontSize: 16 },
  adPlaceholder: {
    height: 60,
    backgroundColor: '#1A1A1A',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  adText: { color: 'grey', fontSize: 10 },
});
