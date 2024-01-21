import AppDataSource from "./DataSource/dataSource";
import { Profile } from "./entities/Profile.entity";
import { Users } from "./entities/Users.entity";
class UserService{
    private userRepo = AppDataSource.getRepository(Users);
    async getAllUsers() {
        return this.userRepo.find({
            order:{
                id:"ASC"
            },
            relations:['profile']
        });
    }

    // async getUserById(id: number) {
    //     return await this.userRepo.findOne({
    //         where:{id},
    //         select:{firstName:true}
    //     });
    // }
    async getUserByOptions(options:any) {
        return await this.userRepo.findOne({
          where: options,
        //   select: { firstName: true }
        });
        
      }

    async createUser(firstName: string, lastName: string, age: number,gender: string,skill: string) {
        const newUser = new Users();
        const newProfile=new Profile();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.age = age;
        newProfile.gender=gender;
        newProfile.skill=skill;
        newUser.profile=newProfile;
        return this.userRepo.save(newUser);
    }

    async updateUser(userId: number, updatedData: any) {
        return this.userRepo.update(userId, updatedData);
    }
    
    async deleteUser(userId: number) {
        return this.userRepo.delete(userId);
    }
}
export default new UserService;