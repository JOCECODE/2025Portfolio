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
        <ThemedText type="title">Jose Ulices Perez Jr.</ThemedText>
        <HelloWave />
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
      <ThemedView style={styles.stepContainer}>
        <View style={styles.container}>

          <View style={styles.interviewContainer}>
            <ThemedText style={styles.question}>Can you tell me a little about your <ThemedText style={styles.bold}>Background</ThemedText>?</ThemedText>
            <ThemedText style={styles.answer}>Absolutely! After spending a decade as an <ThemedText style={styles.bold}>educator</ThemedText> working with special needs students, I made the leap into tech to pursue my passion for <ThemedText style={styles.bold}>problem-solving</ThemedText> and <ThemedText style={styles.bold}>user experience</ThemedText>. My <ThemedText style={styles.bold}>background in education</ThemedText> has given me a strong foundation in <ThemedText style={styles.bold}>communication</ThemedText>, <ThemedText style={styles.bold}>adaptability</ThemedText>, and breaking down complex concepts into intuitive solutions.</ThemedText>
          </View>

          <View style={styles.interviewContainer}>
            <ThemedText style={styles.question}>What technologies do you work with?</ThemedText>
            <ThemedText style={styles.answer}>I specialize in React Native, Expo, Tailwind, Supabase, and Node.js. My goal is to create seamless digital experiences that prioritize efficiency and accessibility.</ThemedText>
          </View>

          <View style={styles.interviewContainer}>
            <ThemedText style={styles.question}>What are your strengths as a developer?</ThemedText>
            <ThemedText style={styles.answer}>I focus on efficiency for both users and developers, designing intuitive applications that remove friction and help people connect effortlessly.</ThemedText>
          </View>

          <View style={styles.interviewContainer}>
            <ThemedText style={styles.question}>What do you enjoy doing outside of coding?</ThemedText>
            <ThemedText style={styles.answer}>I love hiking at Hart Park, playing Marvel Rivals, jamming to Arctic Monkeys, cooking, watching movies (Wicked is my current favorite), and playing the saxophone.</ThemedText>
          </View>
        </View>
      </ThemedView>
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
  interviewContainer: {
    marginTop: 20,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  answer: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
  bold: {
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'left',
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
