export const PLACEHOLDER = `{
	"name": "name",
	"first_name": "first_name",
	"last_name": "last_name",
	"phone_number": "phone_number"
}`;

export const APP_USER_TEMPLATE = `{
  "data": [
    "{{repeat(6)}}", 
    {
		"profile": [
			{
				"name": "name",
				"first_name": "first_name",
				"last_name": "last_name",
				"phone_number": "phone_number",
				"email":"email",
				"favColor": ["blue", "red", "green"],
				"gender":"gender",
				"company":"company",
				"address":"address"
			}
		],
		"name":"name",
		"created_at":"createdAt"
    }
  ]
}
`;

export const BANK_USER_TEMPLATE = `{
	"name": "name",
	"first_name": "first_name",
	"last_name": "last_name",
	"phone_number": "phone_number"
}`;
