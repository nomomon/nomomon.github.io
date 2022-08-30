import Link from './Link';
import { Chip } from '@mui/material';

function ChipLink({ label, link, icon, ...props }) {
    const renderedIcon = icon({
        style: {
            marginLeft: '0.5em',
        }
    })

    return (
        <Link href={link} underline={'none'} key={label}>
            <Chip
                icon={renderedIcon}
                label={label}
                variant='outlined'
                sx={{ cursor: 'pointer', ...props.sx }}
            />
        </Link>
    );
}

export default ChipLink;