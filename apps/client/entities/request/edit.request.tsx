
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditRequest(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="body" variant="outlined"   />
<TextInput source="type" variant="outlined"   />
<ReferenceInput label="user" source="userId" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}