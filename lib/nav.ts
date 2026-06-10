import type { StaticImageData } from 'next/image'

import evangelismImage from '../images2/Evangelism.jpeg'
import discipleshipImage from '../images/discipleship1.jpg'
import churchPlantingYekepaImage from '../images2/churchplanting_in_yekepa/Church planting in Yekepa5.jpg'
import missionToYouthImage from '../images2/MissiontoYouth/MissiontoYouth2.jpg'
import catchThemYoungImage from '../images2/MissiontoYouth/MissiontoYouth6.jpg'
import crusadeImage from '../images2/Yekepacrusade/Yekepacrusade3.jpg'
import missionImage from '../images/yekepa2.jpg'
import childrenMinistryImage from '../images2/MissiontoYouth/MissiontoYouth11.jpg'

export type ActivityItem = {
  title: string
  slug: string
  short: string
  image: string | StaticImageData
  tagline: string
  intro: string
  scripture: string
  scriptureRef: string
  highlights: { title: string; text: string }[]
}

export const activities: ActivityItem[] = [
  {
    title: 'Evangelism',
    slug: 'evangelism',
    short:
      'Taking the good news of Jesus Christ to streets, homes, and communities.',
    image: evangelismImage,
    tagline: 'Sharing the good news, one heart at a time',
    intro:
      'Evangelism is the heartbeat of JP4SM. We go out to the streets, markets, homes, and campuses to share the love and message of Jesus Christ with everyone, everywhere. Our teams are trained, prayerful, and Spirit-led, meeting people where they are and pointing them to the hope found in Christ alone.',
    scripture:
      'How then shall they call on him in whom they have not believed? And how shall they believe in him of whom they have not heard?',
    scriptureRef: 'Romans 10:14',
    highlights: [
      {
        title: 'Street & Open-Air Outreach',
        text: 'Engaging communities in public spaces with the message of salvation.',
      },
      {
        title: 'Personal Witnessing',
        text: 'Equipping believers to share their faith naturally in daily life.',
      },
      {
        title: 'Follow-up & Care',
        text: 'Connecting new believers to discipleship and a local church family.',
      },
    ],
  },
  {
    title: 'Discipleship',
    slug: 'discipleship',
    short:
      'Grounding new believers in the Word and helping them grow into maturity.',
    image: discipleshipImage,
    tagline: 'Making disciples, not just converts',
    intro:
      'We believe the Great Commission is a call to make disciples, not merely converts. Through structured teaching, mentorship, and small groups, JP4SM walks alongside new believers as they grow in their knowledge of God, deepen their faith, and learn to follow Jesus in every area of life.',
    scripture:
      'Go therefore and make disciples of all nations... teaching them to observe all that I have commanded you.',
    scriptureRef: 'Matthew 28:19-20',
    highlights: [
      {
        title: 'Foundation Classes',
        text: 'Grounding new believers in the essentials of the Christian faith.',
      },
      {
        title: 'Mentorship',
        text: 'Pairing growing believers with mature mentors for personal guidance.',
      },
      {
        title: 'Small Groups',
        text: 'Building authentic community where faith is lived out together.',
      },
    ],
  },
  {
    title: 'Church Planting',
    slug: 'church-planting',
    short:
      'Establishing vibrant local churches in unreached towns and villages.',
    image: churchPlantingYekepaImage,
    tagline: 'Establishing lighthouses of the Gospel',
    intro:
      'Where there is no witness, we plant one. JP4SM identifies unreached and under-reached communities and establishes vibrant local churches that become enduring centers of worship, discipleship, and outreach. Each church we plant is empowered to stand, grow, and reproduce.',
    scripture:
      'I planted, Apollos watered, but God gave the growth.',
    scriptureRef: '1 Corinthians 3:6',
    highlights: [
      {
        title: 'Community Assessment',
        text: 'Identifying regions with the greatest spiritual need.',
      },
      {
        title: 'Leader Raising',
        text: 'Training and commissioning local leaders to shepherd the flock.',
      },
      {
        title: 'Sustainable Growth',
        text: 'Empowering each church to become self-sustaining and reproducing.',
      },
    ],
  },
  {
    title: 'Vocational Bible Studies',
    slug: 'vocational-bible-studies',
    short:
      'Equipping believers with scripture and practical skills for life and ministry.',
    image: missionToYouthImage,
    tagline: 'Faith and skill, working hand in hand',
    intro:
      'Our Vocational Bible Studies blend deep biblical teaching with practical life and trade skills. We believe a transformed life touches every sphere — spiritual, social, and economic. This ministry empowers believers to grow in the Word while gaining tools to thrive and serve their communities.',
    scripture:
      'Whatever you do, work heartily, as for the Lord and not for men.',
    scriptureRef: 'Colossians 3:23',
    highlights: [
      {
        title: 'In-Depth Bible Teaching',
        text: 'Systematic study of scripture for spiritual depth and understanding.',
      },
      {
        title: 'Skills Training',
        text: 'Practical vocational training to empower and dignify lives.',
      },
      {
        title: 'Kingdom Impact',
        text: 'Releasing believers to be salt and light in the marketplace.',
      },
    ],
  },
  {
    title: 'Catch Them Young (CTY)',
    slug: 'catch-them-young',
    short:
      'Reaching teenagers and youth with the gospel before the world claims them.',
    image: catchThemYoungImage,
    tagline: 'Winning a generation while hearts are tender',
    intro:
      'Catch Them Young (CTY) is our dedicated outreach to teenagers and young people. We meet youth in schools, neighborhoods, and gatherings with relevant, engaging, and Christ-centered programs — discipling them early so they grow into bold, grounded followers of Jesus.',
    scripture:
      'Remember now thy Creator in the days of thy youth.',
    scriptureRef: 'Ecclesiastes 12:1',
    highlights: [
      {
        title: 'School Outreach',
        text: 'Bringing the Gospel into schools through relevant programs.',
      },
      {
        title: 'Youth Camps',
        text: 'Immersive experiences that ignite passion and build community.',
      },
      {
        title: 'Mentorship',
        text: 'Guiding young people through the challenges of growing up in faith.',
      },
    ],
  },
  {
    title: 'Crusade',
    slug: 'crusade',
    short:
      'Large-scale gospel gatherings that ignite revival and harvest souls.',
    image: crusadeImage,
    tagline: 'Gathering the multitudes for a harvest',
    intro:
      'Our crusades are large-scale gospel gatherings designed to reach entire communities at once. With worship, preaching, and prayer, these events become powerful moments of revival where many encounter Christ, receive healing, and begin their journey of faith.',
    scripture:
      'And I, when I am lifted up from the earth, will draw all people to myself.',
    scriptureRef: 'John 12:32',
    highlights: [
      {
        title: 'Mass Evangelism',
        text: 'Reaching thousands with the message of salvation in one gathering.',
      },
      {
        title: 'Worship & Prayer',
        text: 'Creating an atmosphere where people encounter the presence of God.',
      },
      {
        title: 'Harvest Follow-up',
        text: 'Connecting new converts to discipleship and local churches.',
      },
    ],
  },
  {
    title: 'Mission',
    slug: 'mission',
    short:
      'Sending laborers into remote and unreached fields to serve and share Christ.',
    image: missionImage,
    tagline: 'Going to the ends of the earth',
    intro:
      'Mission is at the core of who we are. JP4SM sends trained laborers into remote, rural, and unreached areas — combining the proclamation of the Gospel with acts of compassion and service. We go where few will go, carrying both the message and the love of Christ.',
    scripture:
      'The harvest is plentiful, but the laborers are few.',
    scriptureRef: 'Matthew 9:37',
    highlights: [
      {
        title: 'Field Deployment',
        text: 'Sending missionaries into unreached and under-served regions.',
      },
      {
        title: 'Compassion Ministry',
        text: 'Meeting practical needs as an expression of Christ\u2019s love.',
      },
      {
        title: 'Local Partnership',
        text: 'Working with communities to establish a lasting Gospel witness.',
      },
    ],
  },
  {
    title: 'Children Ministry',
    slug: 'children-ministry',
    short:
      'Nurturing the faith of children through love, teaching, and care.',
    image: childrenMinistryImage,
    tagline: 'Building strong foundations of faith',
    intro:
      'Children are precious to God and to us. Our Children Ministry creates safe, joyful, and Christ-centered environments where children learn about Jesus, grow in faith, and discover their worth. Through stories, songs, and caring teachers, we plant seeds that last a lifetime.',
    scripture:
      'Let the little children come to me, and do not hinder them.',
    scriptureRef: 'Matthew 19:14',
    highlights: [
      {
        title: 'Sunday School',
        text: 'Engaging, age-appropriate teaching of God\u2019s Word.',
      },
      {
        title: 'Creative Programs',
        text: 'Songs, stories, and activities that make faith come alive.',
      },
      {
        title: 'Loving Care',
        text: 'Nurturing each child in a safe and welcoming environment.',
      },
    ],
  },
]

export function getActivity(slug: string) {
  return activities.find((a) => a.slug === slug)
}

export const mainNav = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Team', href: '/team' },
  { title: 'Activities', href: '/activities' },
]
