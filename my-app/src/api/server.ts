let token = 'b9831aa5bcc2804b05a54a7e95406765db8b441b2eb0490c';

export const server_calls = {
    get: async () => {
        const response = await fetch('https://drone-inventory-project-nn.herokuapp.com/profile/api/drones',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer ${token}'
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server!')
        }

        return await response.json()
    },
    create: async (data:any = {}) => {
        const response = await fetch('https://drone-inventory-project-nn.herokuapp.com/profile/api/drones',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer ${token}'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create an instrument in the Database!')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) =>{
        const response = await fetch('https://drone-inventory-project-nn.herokuapp.com/api/drones/${id}',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer ${token}'
            },
            body:JSON.stringify(data)
        });
    }
}