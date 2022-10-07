import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { Product } from "../../app/model/product";

interface Props{
    product: Product
}

export default function ProductCard({product} : Props){
    return(
        <ListItem>
            <ListItemAvatar>
                <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
                {`${product.name} - ${product.brand}`}
            </ListItemText>
        </ListItem>
    )
} 