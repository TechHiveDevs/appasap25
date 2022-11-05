
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
AutocompleteInput,
NumberInput,
BooleanInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditUser(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="email" variant="outlined" validate={required()}  />
<AutocompleteInput variant="outlined" source="gender" choices={[
{ id: "Male", name: "Male" },
{ id: "Female", name: "Female" },
]}  />
<NumberInput source="age" variant="outlined"  />
<NumberInput source="phone" variant="outlined"  />
<BooleanInput source="canWorkFromHome" variant="outlined"  />

      </SimpleForm>
    </Edit>
  );
}