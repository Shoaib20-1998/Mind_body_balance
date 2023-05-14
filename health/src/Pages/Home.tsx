import React from 'react'
import { Box, Heading, Text, Button, Stack, SimpleGrid } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import CaptionCarousel from '../Components/Crousel';
import { Link } from 'react-router-dom';
function Home() {

    return <>
        <CaptionCarousel />
        <Box
            bg="#111827"
            py={16}
            px={{ base: 4, md: 8 }}
            textAlign="center"
        >
            <Heading as="h1" size="2xl" mb={4} color={'white'}>
                Get fit and healthy with us
            </Heading>
            <Text fontSize="xl" mb={8} color={'white'}>
                Join our fitness program and transform your body in just 12 weeks
            </Text>
            <Box display="flex" justifyContent="center">
                <Box
                    bg={'#2563EB'}
                    as="a"
                    href="#"
                    rounded="full"
                    color="white"
                    display="flex"
                    alignItems="center"
                    px={8}
                    py={3}
                    fontWeight="semibold"
                    transition="all 0.2s"
                    _hover={{ bg: "blue.600" }}
                >
                    <Link to="/login"><Text mr={2}>Get started</Text></Link>
                    <FiChevronRight />
                </Box>
            </Box>
        </Box>

        <Box bg="white" py={16} px={{ base: 4, md: 8 }} textAlign="center">
            <Heading as="h2" size="xl" mb={8}>
                Choose the perfect plan for you
            </Heading>
            <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify="center"
                align="center"
            >
                <Box
                    bg="gray.100"
                    rounded="md"
                    shadow="md"
                    py={8}
                    px={6}
                    flex="1"
                    maxW="sm"
                    textAlign="center"
                >
                    <Heading as="h3" size="lg" mb={4}>
                        Basic Plan
                    </Heading>
                    <Text fontSize="xl" mb={4}>
                        Perfect for beginners
                    </Text>
                    <Text fontSize="lg" fontWeight="semibold" mb={4}>
                        $9.99/month
                    </Text>
                    <Link to="/login">
                    <Button
                        as="a"
                        href="#"
                        colorScheme="blue"
                        size="lg"
                        fontWeight="semibold"
                        rightIcon={<FiChevronRight />}
                        _hover={{ bg: "blue.600" }}
                        bg={'#2563EB'}
                    >
                        Choose Plan
                    </Button>
                    </Link>
                </Box>
                <Box
                    bg="gray.200"
                    rounded="md"
                    shadow="md"
                    py={8}
                    px={6}
                    flex="1"
                    maxW="sm"
                    textAlign="center"
                >
                    <Heading as="h3" size="lg" mb={4}>
                        Premium Plan
                    </Heading>
                    <Text fontSize="xl" mb={4}>
                        Perfect for experienced users
                    </Text>
                    <Text fontSize="lg" fontWeight="semibold" mb={4}>
                        $19.99/month
                    </Text>
                    <Link to="/login">
                    <Button
                        as="a"
                        href="#"
                        colorScheme="blue"
                        size="lg"
                        fontWeight="semibold"
                        rightIcon={<FiChevronRight />}
                        _hover={{ bg: "blue.600" }}
                        bg={'#2563EB'}
                    >
                        Choose Plan
                    </Button>
                    </Link>
                </Box>

                <Box
                    bg="gray.200"
                    rounded="md"
                    shadow="md"
                    py={8}
                    px={6}
                    flex="1"
                    maxW="sm"
                    textAlign="center"
                >
                    <Heading as="h3" size="lg" mb={4}>
                        Membership Plan
                    </Heading>
                    <Text fontSize="xl" mb={4}>
                        Perfect for regular users
                    </Text>
                    <Text fontSize="lg" fontWeight="semibold" mb={4}>
                        $16.99/month
                    </Text>
                    <Link to="/login">
                        <Button
                            as="a"
                            href="#"
                            colorScheme="blue"
                            size="lg"
                            fontWeight="semibold"
                            rightIcon={<FiChevronRight />}
                            _hover={{ bg: "blue.600" }}
                            bg={'#2563EB'}
                        >
                            Choose Plan
                        </Button>
                    </Link>
                </Box>
            </Stack>
        </Box>
        <Box bg="#111827" color={"white"} py={16} px={{ base: 4, md: 8 }} textAlign="center">
            <Heading as="h2" size="xl" mb={8}>
                Delicious and healthy meals for you
            </Heading>
        </Box>

        <SimpleGrid width={"90%"} m={"auto"} columns={{ base: 1, md: 3 }} spacing={10}>
            <Box
                bg="white"
                m={"auto"}
                rounded="md"
                shadow="md"
                p={6}
                maxW="sm"
                textAlign="center"
            >
                <Heading as="h3" size="lg" mb={4}>
                    Grilled Chicken and Vegetables
                </Heading>
                <Text fontSize="xl" mb={4}>
                    Lean protein and nutrient-packed veggies make this a perfect meal for
                    post-workout recovery.
                </Text>
                <Text fontSize="lg" fontWeight="semibold" mb={4}>
                    350 calories
                </Text>
                <Link to="/login">
                    <Button
                        as="a"
                        href="#"
                        colorScheme="blue"
                        size="lg"
                        fontWeight="semibold"
                        rightIcon={<FiChevronRight />}
                        _hover={{ bg: "blue.600" }}
                        bg={'#2563EB'}
                    >
                         See Recipe
                    </Button>
                </Link>
            </Box>
            <Box
            
            
                bg="white"
                rounded="md"
                shadow="md"
                p={6}
                maxW="sm"
                textAlign="center"
            >
                <Heading as="h3" size="lg" mb={4}>
                    Quinoa and Black Bean Salad
                </Heading>
                <Text fontSize="xl" mb={4}>
                    This protein-packed salad is full of fiber and flavor, making it a great
                    option for a healthy lunch.
                </Text>
                <Text fontSize="lg" fontWeight="semibold" mb={4}>
                    400 calories
                </Text>
                <Link to="/login">
                    <Button
                        as="a"
                        href="#"
                        colorScheme="blue"
                        size="lg"
                        fontWeight="semibold"
                        rightIcon={<FiChevronRight />}
                        _hover={{ bg: "blue.600" }}
                        bg={'#2563EB'}
                    >
                         See Recipe
                    </Button>
                </Link>
            </Box>
            <Box
                bg="white"
                rounded="md"
                shadow="md"
                p={6}
                maxW="sm"
                textAlign="center"
            >
                <Heading as="h3" size="lg" mb={4}>
                    Salmon and Roasted Vegetables
                </Heading>
                <Text fontSize="xl" mb={4}>
                    This omega-3 rich meal is great for heart health and muscle recovery after
                    a tough workout.
                </Text>
                <Text fontSize="lg" fontWeight="semibold" mb={4}>
                    450 calories
                </Text>
                <Link to="/login">
                    <Button
                        as="a"
                        href="#"
                        colorScheme="blue"
                        size="lg"
                        fontWeight="semibold"
                        rightIcon={<FiChevronRight />}
                        _hover={{ bg: "blue.600" }}
                        bg={'#2563EB'}
                    >
                        See Recipe
                    </Button>
                    </Link>
            </Box>
        </SimpleGrid>

        <Box textAlign={'center'} m={'auto'} mt={'50px'} bg={'#E2E8F0'} w={'90%'} p={6}>
            <Heading as="h1" size="xl" mb={6}>
                Get Fit and Healthy with Our Fitness Program
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={10}>
                <Box bg="white" rounded="md" shadow="md" p={6}>
                    <Heading as="h2" size="lg" mb={4}>
                        Try For Free/1 month
                    </Heading>
                    <Text fontSize="xl" mb={6}>
                        For fitness enthusiasts who want to take their training to the next
                        level.
                    </Text>
                    <Box mb={6}>
                        <Text fontSize="lg" fontWeight="semibold" mb={2}>
                            What's included:
                        </Text>
                        <Text fontSize="md">
                            - Customized workout plan <br />
                            - Nutrition guide <br />
                            - Access to fitness community <br />
                        </Text>
                    </Box>
                    <Text fontSize="lg" fontWeight="semibold" mb={4}>
                        $0.00/month
                    </Text>
                    <Link to='/signup'>
                        <Button
                            as="a"
                            href="#"
                            colorScheme="blue"
                            size="lg"
                            fontWeight="semibold"
                            rightIcon={<FiChevronRight />}
                            _hover={{ bg: "blue.600" }}
                            bg={'#2563EB'}
                        >
                            Sign Up Now
                        </Button>
                    </Link>
                </Box>


                <Box bg="white" rounded="md" shadow="md" p={6}>
                    <Heading as="h2" size="lg" mb={4}>
                        Basic Plan
                    </Heading>
                    <Text fontSize="xl" mb={6}>
                        Perfect for beginners who want to start their fitness journey.
                    </Text>
                    <Box mb={6}>
                        <Text fontSize="lg" fontWeight="semibold" mb={2}>
                            What's included:
                        </Text>
                        <Text fontSize="md">
                            - Customized workout plan <br />
                            - Nutrition guide <br />
                            - Access to fitness community <br />
                            - Access to our assecors <br />
                        </Text>
                    </Box>
                    <Text fontSize="lg" fontWeight="semibold" mb={4}>
                        $9.99/month
                    </Text>
                    <Link to='/signup'>
                        <Button
                            as="a"
                            href="#"
                            colorScheme="blue"
                            size="lg"
                            fontWeight="semibold"
                            rightIcon={<FiChevronRight />}
                            _hover={{ bg: "blue.600" }}
                            bg={'#2563EB'}
                        >
                            Sign Up Now
                        </Button>
                    </Link>
                </Box>
                <Box bg="white" rounded="md" shadow="md" p={6}>
                    <Heading as="h2" size="lg" mb={4}>
                        Premium Plan
                    </Heading>
                    <Text fontSize="xl" mb={6}>
                        For fitness enthusiasts who want to take their training to the next
                        level.
                    </Text>
                    <Box mb={6}>
                        <Text fontSize="lg" fontWeight="semibold" mb={2}>
                            What's included:
                        </Text>
                        <Text fontSize="md">
                            - Customized workout plan <br />
                            - Nutrition guide <br />
                            - Access to fitness community <br />
                            - Personalized coaching and support <br />
                            - Exclusive access to premium content <br />
                        </Text>
                    </Box>
                    <Text fontSize="lg" fontWeight="semibold" mb={4}>
                        $19.99/month
                    </Text>
                    <Link to='/signup'>
                        <Button
                            as="a"
                            href="#"
                            colorScheme="blue"
                            size="lg"
                            fontWeight="semibold"
                            rightIcon={<FiChevronRight />}
                            _hover={{ bg: "blue.600" }}
                            bg={'#2563EB'}
                        >
                            Sign Up Now
                        </Button>
                    </Link>
                </Box>

                <Box bg="white" rounded="md" shadow="md" p={6}>
                    <Heading as="h2" size="lg" mb={4}>
                        Membership Plan
                    </Heading>
                    <Text fontSize="xl" mb={6}>
                        For fitness enthusiasts who want to take their training to the next
                        level.
                    </Text>
                    <Box mb={6}>
                        <Text fontSize="lg" fontWeight="semibold" mb={2}>
                            What's included:
                        </Text>
                        <Text fontSize="md">
                            - Customized workout plan <br />
                            - Nutrition guide <br />
                            - Access to fitness community <br />
                            - Personalized coaching and support <br />
                            - Exclusive access to premium content <br />
                            - Customize Chart plan
                        </Text>
                    </Box>
                    <Text fontSize="lg" fontWeight="semibold" mb={4}>
                        $16.99/month
                    </Text>
                    <Link to='/signup'>
                        <Button
                            as="a"
                            href="#"
                            colorScheme="blue"
                            size="lg"
                            fontWeight="semibold"
                            rightIcon={<FiChevronRight />}
                            _hover={{ bg: "blue.600" }}
                            bg={'#2563EB'}
                        >
                            Sign Up Now
                        </Button>
                    </Link>
                </Box>
            </SimpleGrid>
        </Box>
        <Heading m={'10'} color={'white'} as="h2" size="lg">
            Customer Victory Reviews
        </Heading>
        <SimpleGrid w={'90%'} m={'auto'} mb={'10'} columns={{ base: 1, md: 3 }} spacing={10}>

            <Box
                bg="white"
                rounded="md"
                shadow="md"
                p={6}
                maxW="sm"
                textAlign="center"
                m={'auto'}
            >
                <Box mb={4}>
                    <img
                        src="https://static.toiimg.com/photo/msid-70347572/70347572.jpg"
                        alt="Customer Victory Review"
                        width="100%"
                        height="150"
                    //   borderRadius="full"
                    //   objectFit="cover"
                    />
                </Box>
                <Heading as="h3" size="md" mb={2}>
                    Improved My Health and Confidence!
                </Heading>
                <Text fontSize="md" mb={4}>
                    "Since starting this fitness program, I've noticed a huge
                    improvement in my overall health and fitness. Not only have I lost
                    weight and toned my body, but I also have more energy and feel more
                    confident than ever before. I highly recommend this program to
                    anyone looking to make a positive change in their life."
                </Text>
                <Text fontSize="md" fontWeight="semibold">
                    - Meenakshi Agarwal.
                </Text>
            </Box>

            <Box
                bg="white"
                rounded="md"
                shadow="md"
                p={6}
                maxW="sm"
                textAlign="center"
            >
                <Box mb={4}>
                    <img
                        src="https://static.toiimg.com/thumb/msid-81972193/81972193.jpg?width=500&resizemode=4"
                        alt="Customer Victory Review"
                        width="100%"
                        height="150"
                    //   borderRadius="full"
                    //   objectFit="cover"
                    />
                </Box>
                <Heading as="h3" size="md" mb={2}>
                    i Reduced my Health Risks
                </Heading>
                <Text fontSize="md" mb={4}>
                    "Losing the extra weight, I am able to move around better, more flexible, stopped snoring and my blood pressure went back to normal. I feel great, I look better, my clothes fit better. Went from size 10 to size 6. Best thing I have done for myself and self esteem health"
                </Text>
                <Text fontSize="md" fontWeight="semibold">
                    - Tanuja Mandal.
                </Text>
            </Box>

            <Box
                bg="white"
                rounded="md"
                shadow="md"
                p={6}
                maxW="sm"
                textAlign="center"
            >
                <Box mb={4}>
                    <img
                        src="https://static.toiimg.com/thumb/msid-71050237,width-1070,height-580,imgsize-944456,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
                        alt="Customer Victory Review"
                        width="100%"
                        height="150"
                    //   borderRadius="full"
                    //   objectFit="cover"
                    />
                </Box>
                <Heading as="h3" size="md" mb={2}>
                    It boosted my mood and mental health.
                </Heading>
                <Text fontSize="md" mb={4}>
                    "I have lost a total of 47 lbs. I saw rapid results with this program. My experience has been great and been a blessing. It was hard for me to lose weight util now. The staff at this center are wonderful, helpful, and thoughtful during this delicate time. My eating habits have changed, I have increased my exercise habits, and feel more confident in myself."
                </Text>
                <Text fontSize="md" fontWeight="semibold">
                    - Shalini Malhotra.
                </Text>
            </Box>
        </SimpleGrid>



    </>
}

export default Home;