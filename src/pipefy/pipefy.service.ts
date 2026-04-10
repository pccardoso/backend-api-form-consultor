import { Injectable } from '@nestjs/common';

@Injectable()
export class PipefyService {

    async getCards(idPipe: number) {

        const response = await fetch('https://api.pipefy.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.TOKEN_PIPEFY}`,
            },
            body: JSON.stringify({
                query: `
                    query {
                        allCards(pipeId: ${idPipe}) {
                            edges {
                                node {
                                    id
                                    title
                                    createdAt
                                    current_phase {
                                        id
                                        name
                                    }
                                    fields {
                                        name
                                        value
                                    }
                                }
                            }
                        }
                    }
                `,
            }),
        });

        const data = await response.json();
        return data.data?.allCards?.edges || [];

    }

    async searchCardsByPlate(idPipe: number, plate: string) {

        const response = await this.getCards(idPipe);

        return response;

        const filteredCards = response.filter((card) => {
            const plateField = card.node.fields.find((field) => field.name === 'Placa do Veículo');
            return plateField && plateField.value === plate;
        });

        return filteredCards;

    }

}
