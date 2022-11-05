
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
BooleanField,
} from "react-admin";

// ------------------------------------------------

export default function ShowUser(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="name" />
<TextField source="email" />
<TextField source="gender" />
<NumberField source="age" />
<NumberField source="phone" />
<BooleanField source="canWorkFromHome" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}