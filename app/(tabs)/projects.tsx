import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Project {
  jobType: string;
  project: string;
  stack: string;
}

// Full-Stack Developer	Task Manager or Workout Logger (CRUD App)	React, Node.js, Supabase
const projects: Project[] = [
  { jobType: 'Frontend Developer', project: 'Interactive Dashboard (Styled with animations)', stack: 'React, TypeScript, Chart.js' },
  { jobType: 'Backend Developer', project: 'RESTful API + Authentication System', stack: 'Node.js, Express, Supabase' },
  { jobType: 'Full-Stack Developer', project: 'Task Manager or Workout Logger', stack: 'CRUD App: React, Node.js, Supabase'},
  { jobType: 'Software Engineer I', project: 'Clone of a Popular App (Trello, Twitter, etc.)', stack: 'React, Node.js, PostgreSQL' },
  { jobType: 'E-Commerce Focus', project: 'Simple Storefront with Cart & Checkout', stack: 'Next.js, Stripe, Firebase' },
];

export default function ProjectsTab() {
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Projects</ThemedText>
      </ThemedView>
      <View style={styles.listContainer}>
        {projects.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <TouchableOpacity onPress={() => toggleCheck(index)} style={styles.checkButton}>
              <MaterialCommunityIcons
                name={checkedItems[index] ? 'checkbox-marked' : 'checkbox-blank-outline'}
                size={24}
                color={checkedItems[index] ? 'green' : 'gray'}
              />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <ThemedText style={styles.jobType}>{item.jobType}</ThemedText>
              <ThemedText>{item.project}</ThemedText>
              <ThemedText style={styles.stack}>{item.stack}</ThemedText>
            </View>
          </View>
        ))}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  listContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkButton: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  jobType: {
    fontWeight: 'bold',
  },
  stack: {
    fontStyle: 'italic',
    color: 'gray',
  },
});
