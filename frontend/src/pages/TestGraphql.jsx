import { useQuery, gql } from '@apollo/client';

function TestGraphql() {

    const {loading, error, data} = useQuery(FIND_All_AUTHORS);
  
  
    if (loading) {

        return <div>Loading...</div>;
   
      }
  
    return (
        <div>
           
             {data?.findAllAuthors[0].name} dupa 
        </div>
    )
  
  }

  export default TestGraphql

  const find_All_Tutorials = gql`
   query findAllTutorials {
    findAllTutorials {
        id
        title
        description   
    }       
  }
`;

const FIND_All_AUTHORS = gql`
    query findAllAuthors {
        findAllAuthors {
            name    
        }
}
`;
