export default function ContactInfo({ contact }) {
    return (
        <div className='layout' id='contactinfo'>
            <h3>Contact Information</h3>
            {contact.map((el) => (
                <ContactInfoItem contact={el.info} info={el.contact} key={el.info} />
            ))}
        </div>
    );
}

function ContactInfoItem({ contact, info }) {
    const isEmail = contact.includes('@');
    const isPhone = /^\+?\d{10,15}$/.test(contact);
    const isLocation = !isEmail && !isPhone; 

    const googleMapsLink = `https://www.google.com/maps/place/Tetovo/@42.0076515,20.9482908,14z/data=!3m1!4b1!4m6!3m5!1s0x1353f0e82a50e8db:0x5587e34b46cad34c!8m2!3d42.0062341!4d20.9697842!16zL20vMDQxeWo1?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D`;

    return (
        <div className='item'>
            <p className='number'>{info}</p>
            {isEmail ? (
                <a href={`mailto:${contact}`} className="title">{contact}</a>
            ) : isPhone ? (
                <a href={`tel:${contact}`} className='title'>{contact}</a>
            ) : isLocation ? (
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className='title'>{contact}</a>
            ) : (
                <p className='title'>{contact}</p>
            )}
        </div>
    );
}
