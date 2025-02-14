import { Image, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/puppy.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">My Name Is Jose Ulices Perez Jr.</ThemedText>
        <View style={styles.container}>
      <ThemedText style={styles.heading}>Jose Ulices Perez Jr.</ThemedText>
      <ThemedText style={styles.subheading}>Full-Stack Web Developer</ThemedText>

      <ThemedText style={styles.paragraph}>
        <ThemedText style={styles.bold}>Background:</ThemedText> After spending a decade as an educator working with special needs students, I made the leap into tech to pursue my passion for problem-solving and user experience. My background in education has given me a strong foundation in communication, adaptability, and breaking down complex concepts into intuitive solutions.
      </ThemedText>
      
      <ThemedText style={styles.paragraph}>
        <ThemedText style={styles.bold}>Tech Stack:</ThemedText> React Native, Expo, Tailwind, Supabase, Node.js. I have a keen interest in working with Grindr's tech stack to create seamless and inclusive digital experiences.
      </ThemedText>
      
      <ThemedText style={styles.paragraph}>
        <ThemedText style={styles.bold}>Strengths:</ThemedText> I focus on efficiency for both users and developers, designing intuitive applications that remove friction and help people connect effortlessly.
      </ThemedText>
      
      <ThemedText style={styles.paragraph}>
        <ThemedText style={styles.bold}>Hobbies & Interests:</ThemedText> Hiking at Hart Park, playing Marvel Rivals, jamming to Arctic Monkeys, cooking, watching movies (Wicked is my current favorite), and playing the saxophone.
      </ThemedText>
    </View>
      </ThemedView>
      <View style={styles.linksContainer}>
        <View style={styles.gridRow}>
          <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://www.linkedin.com/in/jose-u-perez-jr/')}>
            <MaterialCommunityIcons name="linkedin" color="black" size={24} />
            <ThemedText style={styles.linkText}>LinkedIn</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://www.example.com/resume.pdf')}>
            <MaterialCommunityIcons name="file-document" color="black" size={24} />
            <ThemedText style={styles.linkText}>Resume</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://github.com/JOCECODE')}>
            <MaterialCommunityIcons name="github" color="black" size={24} />
            <ThemedText style={styles.linkText}>GitHub</ThemedText>
          </TouchableOpacity>
        </View>
        <View style={styles.gridRow}>
          <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://www.youtube.com/ulahhtv')}>
            <MaterialCommunityIcons name="youtube" color="black" size={24} />
            <ThemedText style={styles.linkText}>YouTube</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://www.instagram.com/ulahh')}>
            <MaterialCommunityIcons name="instagram" color="black" size={24} />
            <ThemedText style={styles.linkText}>Instagram</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'left',
  },
  bold: {
    fontWeight: 'bold',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  bio: {
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  linksContainer: {
    alignItems: 'center',
    marginTop: 20,
  },  gridRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 15,
  },
  linkButton: {
    flexDirection: 'row',
    backgroundColor: 'none',
    padding: 10,
    borderRadius: 5,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  linkText: {
    color: 'black',
  },
  reactLogo: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
