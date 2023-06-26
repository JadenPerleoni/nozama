import axios from "axios";

const authToken =
  "v^1.1#i^1#r^0#I^3#p^1#f^0#t^H4sIAAAAAAAAAOVYbWwURRju9YvUitLgJxA4F0wQuLuZvbvt7bZ3em05elDao1daqGKd251r195+dHeO9iTEpjH8UPEjqLEaERMjMagJaoJoFIVESKTRH42UHw0iFEg02iCkEYW4u3eUayV89RKbeH8uM/POO8/zzPvOOzugt7hkyZbaLWMzbTPyd/SC3nybDZaCkuKipXcU5M8pygNZBrYdvYt6C/sKzlTqSEqoXCPWVUXWsb1HSsg6Z3X6qaQmcwrSRZ2TkYR1jvBcNLi6jqOdgFM1hSi8kqDs4Ro/xQLgozFigYBQzA1Zo1e+7LNJ8VMwjuPA5/F4GJr1+mDMGNf1JA7LOkEy8VM0oN0OwDhopgkyHPRy0FgDglbK3ow1XVRkw8QJqIAFl7PmallYrw0V6TrWiOGECoSDoWhDMFyzvL6p0pXlK5DRIUoQSeoTW9WKgO3NKJHE115Gt6y5aJLnsa5TrkB6hYlOueBlMLcA35IaCgLr5jErMOU+gYc5UTKkaBIi14Zh9oiCI26ZclgmIkldT1BDjNiTmCeZVr3hIlxjN//WJFFCjItY81PLq4Lrg5EIFViJBCxHsOaoV55CEnJEGmsccdaLhRjyeBwAQ55maJRZJu0ro/GkdaoVWRBNxXR7vUKqsIEZT1YGZCljGDXIDVowTkw82Xa+ywoCb6u5o+ktTJIO2dxULBky2K3m9fUfn02IJsaSBI97mDxgCeSnkKqKAjV50ArETOz06H6qgxCVc7m6u7ud3W6norW7aACga93quijfgSVEpW3NXDfsxetPcIgWFR4bM3WRIynVwNJjBKoBQG6nAp5yH4TujO4TYQUm9/6rI4uza2I65Co9eF7gfTGBjrNu5PEiJhf5EciEqMvEgWMo5ZCQ1omJmkA8dvBGnCUlrIkC5/bGabcvjh0Cw8YdHjYed8S8AuMwjj8MMI7FeNb3/0mTGw30KOY1THIV6bmJcqYbruNjG5d6BbLKK4Z85YoC61pCkkpEbXW4K7SCkVuXN7pxlwv4bzQXrkq+OiEayjQZ6+dMADPXcyJCraITLEyJXpRXVBxREiKfml4b7NaECNJIKooTCaNjSiSDqhrO2UmdG3o3dUjcGuuc1qf/ojZdlZVuBuz0YmXO1w0HSBWdZvVx8orkUpBx7XAhM9dVsc1CPSXeonFlnVasDZJptqKQvmw6LcpOfSPv1LCuJDXjmu1sMG9fTUonlo1qRjQlkcBaM5xyNktSkqBYAk+3tM5BgItompVayPjKy1kGQnpKvHirkLZNtyMphwdxYeDmLtSuid/2gTzrB/ts+0Gf7at8mw1UggfhQvBAccHawoLb5+giwU4RxZ262C4bn6wadnbilIpELX923hg4/Sb/a+37z3Ze6u46VbE5L/tpYccGcN/440JJASzNemkA866MFME7751JuwFDM5CBXki3goVXRgvhPYV3XfhlV9/iU5Xn51ec8W9/bxvSLn55FswcN7LZivIK+2x5zhcPjfbs/uCNLWuG1488f+6Y7btvanv3Nh5kX/jr1Y5H3n64a6h95NHPXtoQfGy4+uiysY+WnqTZgWOH1676+HP84+OhFRfX1YwNn6eP3//EJvdzAy19A19LvrI/5gxVnuif379h6/FVT2+XZpTt3umrGJwx+FtVat/I3rvnjh3pr686mBpednR26eGB0eJw5J2fDzUvnpVqE5+5UARV/5GzXftOjO6aV4ta8hcPhV6pe5fb3xJhHupvOLx70aWSjk9WDv0w+FZPxct7tWW1nW2fbrLt+XZB16m55z4s++L04NB5nn/9J/bvzceUWQMHXvt9z/dadf+Bmq1LbvvzOXHnaNnJnSOxhtJt3QvCFwvSe/kPxXu21PQRAAA=";

const baseURL = "https://api.ebay.com/buy/browse/v1/item_summary/search";

const params = {
  q: "fart",
  minPrice: "0.0",
  maxPrice: "1000.0",
  sortOrder: "PRICE_PLUS_SHIPPING_LOWEST",
};

const config = {
  headers: {
    Authorization: `Bearer ${authToken}`,
    "Content-Type": "application/json",
    "X-EBAY-C-MARKETPLACE-ID": "EBAY-US",
  },
  params,
};

export const browse = () =>
  axios
    .get(baseURL, config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
