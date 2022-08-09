export function gql(chunks: TemplateStringsArray, ...variables: any[]):string {
    return chunks.reduce(
        (acc, chunk, index) => `${acc}${chunk}${index in variables ? variables[index] : ''}`
    );
}

export async function client<T>(query: string, variables?: object): Promise<T> {
    const response = await fetch('https://api-ap-northeast-1.hygraph.com/v2/cl60gc9z83rju01ut7xtf5d6n/master', {
        method: "POST",
        body: JSON.stringify({query, variables})
    })

    const {data} = await response.json();

    return data;
}

export function date(date:string) {
    return new Date(date).toLocaleDateString('en', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
    });
}

export function dateByYear(date:string) {
    return new Date(date).toLocaleDateString('en', {
        year: 'numeric'
    });
}

export type Post = {
    slug :string;
    title: string;
    content: {
        html: string;
    };
    category: {
        name: string;
    };
    author: {
        name: string;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}