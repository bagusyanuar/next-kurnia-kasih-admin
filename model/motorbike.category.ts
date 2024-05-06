export type MotorbikeCategory = {
    ID: string
    Name: string
}

export function mapToMotorbikeCategories(data: Array<any>): Array<MotorbikeCategory> {
    return data.map((datum) => {
        return {
            ID: datum['id'] as string,
            Name: datum['name'] as string
        }
    })
}

export function mapToMotorbikeCategory(data: any): MotorbikeCategory {
    return {
        ID: data['id'] as string,
        Name: data['name'] as string
    }
}