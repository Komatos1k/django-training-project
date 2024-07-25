import { Box, Button, Flex, Heading } from "@radix-ui/themes"
import { Text } from "@radix-ui/themes/dist/esm/components/callout.js"
import { Navigate } from "react-router-dom"

function NotFound() {
    return <Box align="center" justify="middle">
        <Flex direction={"column"} maxWidth={"350px"} justify={'center'} align={'center'}>
        <Heading size='9'>404 Error!</Heading>
        <Text>Упс.. Сторінку не знайдено..</Text>
        
        <Button>Повернутися на головну</Button>
    </Flex>
    </Box>
}

export default NotFound